"use client"

import React, { useEffect, useRef, useState } from 'react';
import './WheelSpinnerStyle.css';
import { CreateOrder } from '../../common/api/item/item';
import { itemApi } from '../../common/api/item/item-api';
import { useUser } from '../../common/context/user-context';

interface Game {
    id: number;
    name: string;
    image: string;
}

const itemID = 42

const games: Game[] = [
    { id: 1, name: 'DOOM Eternal', image: 'https://disk.godzillasoft.ru/doom_eternal-500x500.jpg' },
    { id: 2, name: "Punch Club", image: "https://disk.godzillasoft.ru/punch_club-square.png"}, 
    { id: 3, name: 'ELDEN RING', image: 'https://disk.godzillasoft.ru/elden-ring-cover.jpg' },
    { id: 4, name: 'Ready or Not', image: 'https://disk.godzillasoft.ru/ready_or_not_pc-game_box_500px.png' },
    { id: 5, name: 'Metro Exodus', image: 'https://disk.godzillasoft.ru/metro_exodus_500x500.jpg' },
    { id: 6, name: "Besiege", image: "https://disk.godzillasoft.ru/besiege (1).png"},
    { id: 7, name: 'Days Gone', image: 'https://disk.godzillasoft.ru/DaysGone.png' },
    { id: 8, name: 'Mortal Kombat 11', image: 'https://disk.godzillasoft.ru/MortalKombat11.png' },
    { id: 9, name: "Love Money", image: 'https://disk.godzillasoft.ru/artworks-dh2RaHEaQVZPYB73-Xl3phA-t500x500.jpg'},
    { id: 10, name: "Dark Souls 3", image: 'https://disk.godzillasoft.ru/DarkSouls3.jpg'},
    { id: 11, name: "Party Hard", image: "https://disk.godzillasoft.ru/previewfile_2803630389.jpg"},
    { id: 12, name: "Heavy Rain", image: 'https://disk.godzillasoft.ru/HeavyRain.jpg'},
    { id: 13, name: "Frostpunk 2", image: 'https://disk.godzillasoft.ru/artworks-yn4qYI36ySgYMMOy-usyezg-t500x500.jpg'},
    { id: 14, name: "Hotline Miami 2", image: 'https://disk.godzillasoft.ru/6536fb7ae8531-500x500.jpg'},
    { id: 15, name: "Alan Wake", image: "https://disk.godzillasoft.ru/6D48CE31-B34A-4830-B7A5-1F5BF0D325F1.thumb.jpeg.5f139a6d2e71fba96ac0bb02f062870e.jpg"},
    { id: 16, name: "No Mans Sky", image: 'https://disk.godzillasoft.ru/No-Mans-Sky.png'},
    { id: 17, name: "Civilization VI", image: 'https://disk.godzillasoft.ru/civ6_upgrade.png'},
    { id: 18, name: "Beholder", image: 'https://disk.godzillasoft.ru/beholder_pc-game_box_500px.png'},
    { id: 19, name: "Sniper Elite 3", image: 'https://disk.godzillasoft.ru/ezgif-7b1fec2f0d47ab.png'},
    { id: 20, name: "Beyond: Two Souls", image: 'https://disk.godzillasoft.ru/artworks-000063245247-c6txwk-t500x500.jpg'},
    { id: 21, name: "Dead Cells", image: "https://disk.godzillasoft.ru/deadCellsSquare.jpg"},
    { id: 22, name: "Pay Day 2", image: "https://disk.godzillasoft.ru/p1_4528893_9b14ffe5 (1).png"}, 
    { id: 23, name: "Surviving Mars", image: "https://disk.godzillasoft.ru/5403290_imgwebp (1).png"},
    { id: 24, name: "ScourgeBringer", image: "https://disk.godzillasoft.ru/sciyrgevrubger.png"},
];

type WheelSpinnerProps = {
    utm_source: any
}

const WheelSpinner = (props: WheelSpinnerProps) => {
    const wheelRef = useRef<HTMLDivElement>(null);

    const buyButtonRef = useRef(null);
    const [showSticky, setShowSticky] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setShowSticky(!entry.isIntersecting);
          },
          { threshold: 0 }
        );
    
        if (buyButtonRef.current) {
          observer.observe(buyButtonRef.current);
        }
    
        return () => {
          if (buyButtonRef.current) {
            observer.unobserve(buyButtonRef.current);
          }
        };
      }, []);

    useEffect(() => {
        const wheel = wheelRef.current;
        if (wheel) {
            wheel.style.animation = 'spin 30s linear infinite';
        }
    }, []);
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
                data = await itemApi.createKeyOrder(itemID, inputValue, accessToken, props.utm_source);
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

    const scroll = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

    return (
        <div className="wheel-container">
        <div className="wheel-items" ref={wheelRef}>
            {games.map((game, index) => (
            <div className="wheel-item" key={index} style={{transform: `rotate(${index * 22.5}deg)`}}>
                <div className='wheel-item-content'>
                    <img src={game.image} className='wheel-item-content-img'></img>
                    <p className='wheel-item-content-name'>{game.name}</p>
                </div>
            </div>
            ))}
            <div className='wheel-space-content'/>
        </div>
        <div className="wheel-pointer"></div>
        <div className='wheel-main-content'>
            <div className='wheel-main-buy-form'>
                <div className='wheel-main-buy-form-header'>
                    <p className='wheel-main-buy-form-title'>Ваш выигрыш придет на почту:</p>
                    <input type='email' className='wheel-main-buy-form-input' placeholder='Введите вашу почту' defaultValue={inputValue} onChange={handleInputChange}></input>
                </div>
                <div className='wheel-main-buy-form-button' onClick={handlePayment} ref={buyButtonRef}>
                    Крутить барабан за 208₽
                </div>
                <div className='wheel-main-buy-form-rules'>Нажимая кнопку "Крутить барабан", вы принимаете <a href="/service_agreement.pdf" className='wheel-main-buy-form-rule-link'><br/>Договор-оферту&nbsp;оказания&nbsp;услуг</a> и <a href="/privacy_security.pdf" className='wheel-main-buy-form-rule-link'>Политика&nbsp;конфиденциальности</a></div>
            </div>
        </div>
        {error && (
            <div className='wheel-buy-form-err'>{error}</div>
        )}
        {/* {showSticky && (
            <div className='wheel-main-sticky-header'>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div>
                        <img src='https://disk.godzillasoft.ru/random_game_banner.png' className='wheel-main-sticky-header-random-img'></img>
                    </div>
                    <div style={{marginLeft: '16px'}}>
                        <p style={{fontSize: '24px', fontWeight: '600', marginBottom: '12px', lineHeight: '24px'}}>Случайная Steam игра</p>
                        <p style={{fontSize: '14px', lineHeight: '14px', color: 'rgb(168, 168, 168)', fontWeight: '600'}}>Испытай удачу и выиграй заветную игру всего лишь за 208₽</p>
                    </div>
                </div>
                <div className='wheel-main-sticky-header-buy-button' onClick={scroll} ref={buyButtonRef}>
                    Купить за 208₽
                </div>
            </div>
        )} */}
        </div>
    );
};

export default WheelSpinner;
