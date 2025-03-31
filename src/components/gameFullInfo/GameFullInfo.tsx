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
                        <p dangerouslySetInnerHTML={{__html: item.pc_requirements?.minimun!}}></p>
                        <p dangerouslySetInnerHTML={{__html: item.pc_requirements?.recommended!}}></p>
                    </div>
                )
            default:
                return null;
        }
    };
    return (
        <div>
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