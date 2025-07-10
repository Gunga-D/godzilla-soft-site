"use client"

import { useSearchParams } from 'next/navigation';
import { CreateOrder } from '../../../common/api/item/item';
import { itemApi } from '../../../common/api/item/item-api';
import { useUser } from '../../../common/context/user-context';
import './RandomGameStyle.css'
import { useEffect, useState, useRef } from 'react';
import RandomBanner from '../../../components/randomBanner/RandomBanner';

interface Game {
    id: number;
    name: string;
    image: string;
  }

const itemID = 42

const games: Game[] = [
    {id: 1, name: "Punch Club", image: "https://disk.godzillasoft.ru/punch_club-square.png"}, 
    { id: 2, name: 'DOOM Eternal', image: 'https://disk.godzillasoft.ru/doom_eternal-500x500.jpg' },
    { id: 3, name: "Balatro", image: "https://disk.godzillasoft.ru/balatro-40036-0.jpg"},
    { id: 4, name: "DOOM: The Dark Ages", image: "https://disk.godzillasoft.ru/download (1).png"}, 
    { id: 5, name: 'ELDEN RING', image: 'https://disk.godzillasoft.ru/elden-ring-cover.jpg' },
    { id: 6, name: 'Ready or Not', image: 'https://disk.godzillasoft.ru/ready_or_not_pc-game_box_500px.png' },
    { id: 7, name: 'Metro Exodus', image: 'https://disk.godzillasoft.ru/metro_exodus_500x500.jpg' },
    { id: 8, name: "NIGHTREIGN", image: "https://disk.godzillasoft.ru/download (2).png"},
    { id: 9, name: "Besiege", image: "https://disk.godzillasoft.ru/besiege (1).png"},
    { id: 10, name: 'Days Gone', image: 'https://disk.godzillasoft.ru/DaysGone.png' },
    { id: 11, name: 'Mortal Kombat 11', image: 'https://disk.godzillasoft.ru/MortalKombat11.png' },
    { id: 12, name: "Love Money", image: 'https://disk.godzillasoft.ru/artworks-dh2RaHEaQVZPYB73-Xl3phA-t500x500.jpg'},
    { id: 13, name: "Dark Souls 3", image: 'https://disk.godzillasoft.ru/DarkSouls3.jpg'},
    { id: 14, name: "Party Hard", image: "https://disk.godzillasoft.ru/previewfile_2803630389.jpg"},
    { id: 15, name: "Heavy Rain", image: 'https://disk.godzillasoft.ru/HeavyRain.jpg'},
    { id: 16, name: "Frostpunk 2", image: 'https://disk.godzillasoft.ru/artworks-yn4qYI36ySgYMMOy-usyezg-t500x500.jpg'},
    { id: 17, name: "Hotline Miami 2", image: 'https://disk.godzillasoft.ru/6536fb7ae8531-500x500.jpg'},
    { id: 18, name: "Alan Wake", image: "https://disk.godzillasoft.ru/6D48CE31-B34A-4830-B7A5-1F5BF0D325F1.thumb.jpeg.5f139a6d2e71fba96ac0bb02f062870e.jpg"},
    { id: 19, name: "No Mans Sky", image: 'https://disk.godzillasoft.ru/No-Mans-Sky.png'},
    { id: 20, name: "Civilization VI", image: 'https://disk.godzillasoft.ru/civ6_upgrade.png'},
    { id: 21, name: "Beholder", image: 'https://disk.godzillasoft.ru/beholder_pc-game_box_500px.png'},
    { id: 22, name: "Sniper Elite 3", image: 'https://disk.godzillasoft.ru/ezgif-7b1fec2f0d47ab.png'},
    { id: 23, name: "Beyond: Two Souls", image: 'https://disk.godzillasoft.ru/artworks-000063245247-c6txwk-t500x500.jpg'},
    { id: 24, name: "Dead Cells", image: "https://disk.godzillasoft.ru/deadCellsSquare.jpg"},
    { id: 25, name: "Pay Day 2", image: "https://disk.godzillasoft.ru/p1_4528893_9b14ffe5 (1).png"}, 
    { id: 26, name: "Surviving Mars", image: "https://disk.godzillasoft.ru/5403290_imgwebp (1).png"},
    { id: 27, name: "ScourgeBringer", image: "https://disk.godzillasoft.ru/sciyrgevrubger.png"},
    { id: 28, name: "Mad Max", image: "https://disk.godzillasoft.ru/3014449889.jpg"},
    { id: 29, name: "Detroit: Become", image: "https://disk.godzillasoft.ru/653757f8ca7e8c1be1083d56-2.jpg"},
    { id: 30, name: "Mafia III: Definitive", image: "https://disk.godzillasoft.ru/mafia_3.jpg"},
    { id: 32, name: "Squad", image: "https://disk.godzillasoft.ru/squad.png"},
    { id: 33, name: "The Escapists 2", image: "https://disk.godzillasoft.ru/The_Escapists_2_6_11zon.png"},
    { id: 34, name: "Devil May Cry 5", image: "https://disk.godzillasoft.ru/devil_may_cry_5 (1).png"},
];
  
export const RandomGameWidget = () => {
    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source')

    const {user, accessToken} = useUser()

    const [inputValue, setInputValue] = useState<string>('');
    useEffect(() => {
        if (user) {
            if (user.email) {
              setInputValue(user.email)
            }
        }
      }, [])

    const [error, setError] = useState<string | null>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setError(null);
    };

    const getErrorMessage = (err: unknown): string => {
        if (typeof err === 'string') {
            return err;
        } else if (err instanceof Error) {
            return err.message;
        } else if (err && typeof err === 'object' && 'message' in err) {
            return String(err.message);
        }
        return 'Произошла неизвестная ошибка';
    };

    const handlePayment = () => {
        if (!inputValue.trim()) {
            setError('Пожалуйста, введите email');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(inputValue)) {
            setError('Пожалуйста, введите корректный email');
            return;
        }

        const createOrder = async () => {
            let data: CreateOrder;
            try {
                data = await itemApi.createKeyOrder(itemID, inputValue, accessToken, utm_source);
            } catch (err: any) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
                return;
            }
            window.open(data.payment_link, "_self");
        };

        const buyItem = async () => {
            try {
                await itemApi.cartItem(itemID);
            } catch (err: any) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
                return;
            }
            createOrder();
        };
        buyItem();
    };

    const containerRef = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);
  
    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;
  
      let animationFrameId: number;
      let lastTimestamp = performance.now();
      const speed = 0.02;
  
      const animate = (timestamp: number) => {
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;
        setOffset((prevOffset) => {
          const newOffset = prevOffset - delta * speed;
          const maxWidth = container.scrollWidth / 2;
          return newOffset <= -maxWidth ? 0 : newOffset;
        });
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animationFrameId = requestAnimationFrame(animate);
    }, []);
    
    const [prokrutkaHint, setProkrutkaHint] = useState<string | null>(null)
    const onProkrutkaEnter = () => {
        setProkrutkaHint('Мы подобрали для данного бокса более 400 игр Steam под разные предпочтения игроков, от кровавых слешеров до игр с 18+ цензором, вам должно 100% понравится. Попробуйте и убедитесь сами.')
    }
    const onProkrutkaOut = () => {
        setProkrutkaHint(null)
    }

    const [oplataHint, setOplataHint] = useState<string | null>(null)
    const onOplataEnter = () => {
        setOplataHint('После заполнения почты и клика на кнопку "Крутить барабан" вас переведет на Тинькофф форму оплаты, где вы сможете оплатить удобным вам способом.')
    }
    const onOplataOut = () => {
        setOplataHint(null)
    }

    const [activationHint, setActivationHint] = useState<string | null>(null)
    const onActivationEnter = () => {
        setActivationHint('В течение 2-5 минут после оплаты на вашу почту придет цифровой ключ, который можно активировать на своем Steam аккаунте.')
    }
    const onActivationOut = () => {
        setActivationHint(null)
    }

    return (
        <>
            <RandomBanner></RandomBanner>
            <div className='RandomGameWidget'>
            <h1 className='RandomGameWidgetTitle'>🎲 БАРАБАН УДАЧИ</h1>
            <div className='RandomGameWidgetHeader'>
                <p className='RandomGameWidgetDescription'>Крути барабан и забирай заветную игру по выгодной цене в следующие 3 этапа</p>
                <div className='RandomGameWidgetStepsContainer'>
                    <div className='RandomGameWidgetStep RandomGameWidgetStepCompleted' onMouseEnter={onProkrutkaEnter} onMouseLeave={onProkrutkaOut}>
                        <span>1</span>
                        <p>Прокрутка</p>
                        {prokrutkaHint && (
                            <div style={{backgroundColor: 'rgb(48, 49, 57)', color: 'white', position: 'absolute', bottom: '-195px', right: '-100px', padding: '8px 12px', zIndex: 2}}>
                                {prokrutkaHint}
                            </div>
                        )}
                    </div>
                    <div className='RandomGameWidgetStep' onMouseEnter={onOplataEnter} onMouseLeave={onOplataOut}>
                        <span>2</span>
                        <p>Оплата</p>
                        {oplataHint && (
                            <div style={{backgroundColor: 'rgb(48, 49, 57)', color: 'white', position: 'absolute', bottom: '-160px', right: '-100px', padding: '8px 12px', zIndex: 2}}>
                                {oplataHint}
                            </div>
                        )}
                    </div>
                        <div className='RandomGameWidgetStep' onMouseEnter={onActivationEnter} onMouseLeave={onActivationOut}>
                        <span>3</span>
                        <p>Активация</p>
                        {activationHint && (
                            <div style={{backgroundColor: 'rgb(48, 49, 57)', color: 'white', position: 'absolute', bottom: '-140px', right: '-100px', padding: '8px 12px', zIndex: 2}}>
                                {activationHint}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="roulette-wrapper">
                <div className="roulette-arrow"></div>
                <div className="roulette-container">
                    <div
                    className="roulette-track"
                    ref={containerRef}
                    style={{ transform: `translateX(${offset}px)` }}
                    >
                    {[...games, ...games].map((game, index) => (
                        <div className="roulette-item" key={index}>
                        <img src={game.image} alt={game.name} />
                        <span>{game.name}</span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className='RandomGameWidgetBuyForm'>
                <div className='RandomGameWidgetBuyFormHeader'>
                    <div className='RandomGameWidgetBuyFormInfo'>Отправим выигрыш на почту:</div>
                    <input type='email' className='RandomGameWidgetBuyFormInput' placeholder='Введите вашу почту' defaultValue={inputValue} onChange={handleInputChange}></input>
                </div>
                <div className='RandomGameWidgetBuyFormButton' onClick={handlePayment}>Крутить барабан за 208₽</div>
                <div className='RandomGameWidgetBuyFormRules'>Нажимая кнопку "Крутить барабан", вы принимаете <a href="/2025_07_09_service_agreement.pdf" className='RandomGameWidgetBuyFormRulesLink'><br/>Договор-оферту&nbsp;оказания&nbsp;услуг</a> и <a href="/2025_07_06_privacy_security.pdf" className='RandomGameWidgetBuyFormRulesLink'>Политика&nbsp;конфиденциальности</a></div>
            </div>
            {error && (
                <div className='RandomGameWidgetBuyFormErr'>{error}</div>
            )}
        </div>
        </>
    );
}