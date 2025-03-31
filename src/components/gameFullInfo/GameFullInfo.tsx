"use client"

import { useState } from 'react';
import './GameFullInfoStyle.css'
import { ItemDetail } from '../../common/api/item-details/item-detail';

type GameFullInfoProps = {
    item: ItemDetail;
};

export const GameFullInfo = ({item}: GameFullInfoProps) => {
    const [activeButton, setActiveButton] = useState<string>('Характеристики');

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const renderContent = () => {
        switch (activeButton) {
            case 'Характеристики':
                return (
                    <div>
                        <div className='GameFullInfoCharacteristic'><span className='GameFullInfoPoint'>Регион:</span> <span>{item.region}</span></div>
                        <div className='GameFullInfoCharacteristic'><span className='GameFullInfoPoint'>Платформа:</span> <span>{item.platform}</span></div>
                        {item.creator && <div className='GameFullInfoCharacteristic'><span className='GameFullInfoPoint'>Разработчик:</span> <span>{item.creator}</span></div>}
                        {item.publisher && <div className='GameFullInfoCharacteristic'><span className='GameFullInfoPoint'>Издатель:</span> <span>{item.publisher}</span></div>}
                        {item.release_date && <div className='GameFullInfoCharacteristic'><span className='GameFullInfoPoint'>Дата релиза:</span> <span>{item.release_date}</span></div>}
                        <p className='GameFullInfoTypeTitle'>Купить {item.title} {item.type=='gift'?"ПОДАРКОМ":"КЛЮЧОМ"}</p>
                        <p>{item.type=='gift'?`Вы приобретаете игру в ${item.platform}, которую получите ПОДАРКОМ на Ваш аккаунт.`:`Вы приобретаете товар в ${item.platform}, который получите КЛЮЧОМ для активации на платформе.`}</p>
                        {item.movies && (
                            <div className='GameFullInfoMovies'>
                                {item.movies.map((movie, idx) => (
                                    <video src={movie.video} poster={movie.poster} key={idx} autoPlay={true} className='GameFullInfoMovie' loop={true} muted={true}></video>
                                ))}
                            </div>
                        )}
                        <p className='GameFullInfoFullDescription'>
                            {item.description}
                        </p>
                    </div>
                );
            case 'Активация и доставка':
                return (
                    <div>
                        <h3>Инструкция по использованию товара:</h3>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: item.slip ? item.slip.replace(/\n/g, '<br />') : 'Информация отсутствует',
                            }}
                        />
                    </div>
                );
            case 'Системные требования':
                return (
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <p dangerouslySetInnerHTML={{__html: item.pc_requirements?.minimun!}} style={{width: "50%"}}></p>
                        <p dangerouslySetInnerHTML={{__html: item.pc_requirements?.recommended!}} style={{width: "50%"}}></p>
                    </div>
                )
            default:
                return null;
        }
    };
    return (
        <div style={{paddingLeft: "15px", paddingRight: "15px"}}>
            <div className='GameFullInfoActionsContainer'>
                <div onClick={() => handleButtonClick('Характеристики')} className={activeButton == 'Характеристики'?'GameFullInfoActionActive':'GameFullInfoAction'}>Характеристики</div>
                {item.pc_requirements && (
                    <div onClick={() => handleButtonClick('Системные требования')} className={activeButton == 'Системные требования'?' GameFullInfoActionActive':'GameFullInfoAction'}>Системные требования</div>
                )}
                <div onClick={() => handleButtonClick('Активация и доставка')} className={activeButton == 'Активация и доставка'?'GameFullInfoActionActive':'GameFullInfoAction'}>Активация и доставка</div>
            </div>
            <div className='GameFullInfoContentContainer'>
                {renderContent()}
            </div>
        </div>
    )
}