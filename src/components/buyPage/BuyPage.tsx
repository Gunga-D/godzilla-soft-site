"use client"

import React, { useCallback, useEffect, useState } from 'react';
import "./BuyPageStyle.css"
import SBP from '../../assets/images/Payment/sbp.png';
import MIR from '../../assets/images/Payment/mir.png';
import TBANK from '../../assets/images/Payment/tbank.png';
import { itemApi } from "../../common/api/item/item-api";
import { CreateOrder } from '../../common/api/item/item';
import Image from "next/image";
import { steamGiftApi } from '../../common/api/steam_gift/api';
import { useUser } from '../../common/context/user-context';

type BuyPageProps = {
  itemID: number,
  isSteamGift: boolean,
  title?: string,
  description?: string,
  utm_source: any
}

export const BuyPage = (props: BuyPageProps) => {
    const {user, accessToken} = useUser()

    const [inputValue, setInputValue] = useState<string>('');
    useEffect(() => {
      if (user) {
        if (props.isSteamGift) {
          if (user.steam_link) {
            const resolveProfile = async () => {
              try {
                  const data = await steamGiftApi.resolveProfile(user.steam_link!);
                  setProfileAvatar(data.data.avatar_url)
                  setProfileName(data.data.profile_name)
                  setInputValue(user.steam_link!)
              } catch (err: any) {
                  setError(err.response.data.message)
                  return;
              }
            };
            resolveProfile()
          }
        } else {
          if (user.email) {
            setInputValue(user.email)
          }
        }
      }
    }, [])

    const [profileAvatar, setProfileAvatar] = useState<string | null>(null);
    const [profileName, setProfileName] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const resolveProfile = async () => {
          try {
              const data = await steamGiftApi.resolveProfile(e.target.value);
              setProfileAvatar(data.data.avatar_url)
              setProfileName(data.data.profile_name)
              setInputValue(e.target.value)
          } catch (err: any) {
              setError(err.response.data.message)
              return;
          }
        };
    
        if (props.isSteamGift) {
          resolveProfile()
          setError(null);
        } else {
          setInputValue(e.target.value);
          setError(null);
        }
    };

    const handlePayment = () => {
        if (!inputValue.trim()) {
            if (props.isSteamGift) {
              setError('Пожалуйста, введите Steam профиль');
            } else {
              setError('Пожалуйста, введите email');
            }
            return;
        }
        if (!props.isSteamGift) {
          if (!/\S+@\S+\.\S+/.test(inputValue)) {
            setError('Пожалуйста, введите корректный email');
            return;
          }
        }

        const createOrder = async () => {
            let data: CreateOrder;
            try {
                if (props.isSteamGift) {
                  data = await itemApi.createGiftOrder(props.itemID, inputValue, accessToken, props.utm_source);
                } else {
                  data = await itemApi.createKeyOrder(props.itemID, inputValue, accessToken, props.utm_source);
                }
            } catch (err) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
                return;
            }
            window.open(data.payment_link, "_self");
        };

        const buyItem = async () => {
            try {
                await itemApi.cartItem(props.itemID);
            } catch (err) {
                const errorMessage = getErrorMessage(err);
                setError(errorMessage);
                return;
            }
            createOrder();
        };
        buyItem();
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


    const [isHinted, setIsHinted] = useState(false);

    const escFunction = useCallback((event: any) => {
        if (event.key === "Escape") {
          setIsHinted(false)
        }
    }, []);
    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
    
        return () => {
          document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div className='BuyPageMainContainer'>
            {isHinted && (
                <div className="BuyPageHintedOverlay" onClick={()=>{setIsHinted(false)}}>
                    <div className="BuyPageHintedContent">
                        <h2 style={{fontWeight: 900, marginBottom: "5px"}}>Как получить ссылку на свой аккаунт?</h2>
                        <h3>Если зашли в Steam через приложение:</h3>
                        <ul>
                          <li>Нажми на имя своего аккаунта в правом верхнем углу, затем нажми «Мой профиль».</li>
                          <li>После открытия твоего профиля сделай правый клик мыши по любому свободному месту на странице для вызова контекстного меню.</li>
                          <li>Выбери "скопировать адрес страницы" - это и есть ссылка на твой профиль Steam. (Ссылка должна быть вида: https://steamcommunity.com/id/твой_никнейм)</li>
                        </ul>
                        <h3 style={{marginTop: "5px"}}>Если зашли в Steam через браузер:</h3>
                        <ul>
                          <li>В правом верхнем углу, после нажатия на имя своего аккаунта, выбери "мой профиль".</li>
                          <li>После перехода скопируй ссылку из адресной строки Твоего браузера. (Ссылка должна быть вида: https://steamcommunity.com/id/твой_никнейм)</li>
                        </ul>
                        <Image src={"/steam-gift-hint-browser.png"} alt='Hint' width={637} height={201}></Image>
                    </div>
                </div>
            )}

            <h2 id='dostavka' className='BuyPageTitle'>{props.title || "Оформление заказа"}</h2>
            <h4 className='BuyPageDescription'>{props.description || (props.isSteamGift?"Цифровой товар будет отправлен гифтом на Steam профиль":"Цифровой товар будет доставлен на указанный е-mail:")}</h4>
            {(!profileAvatar && !profileName) && (
              <div style={{position: "relative", marginBottom: "50px"}}>
                <input
                  className='BuyPageInputValue'
                  placeholder={props.isSteamGift?"Введите ссылку на ваш Steam профиль":"Введите email"}
                  defaultValue={inputValue}
                  onChange={handleInputChange}
                />
                {props.isSteamGift && (
                  <button className='BuyPageProfileHint' onClick={() => setIsHinted(true)}>
                    Где найти?
                  </button>
                )}
              </div>
            )}
            {(profileAvatar || profileName) && (
              <div className='BuyPageProfileInfo'>
                <div className='BuyPageProfileInfoAvatarAndName'>
                  {profileAvatar && (
                    <img src={profileAvatar} width={30} height={30} className='BuyPageProfileInfoAvatar'></img>
                  )}
                  {profileName && (
                    <p className='BuyPageProfileInfoName'>{profileName}</p>
                  )}
                </div>
                <div className='BuyPageProfileCancel' onClick={()=>{setProfileAvatar(null); setProfileName(null)}}>Отменить</div>
              </div>
            )}
            {error && <div className='BuyPageError'>{error}</div>}
            <p className='BuyPageSeparator'>доступные способы оплаты</p>
            <div className='BuyPagePaymentsContainer'>
                <div className='BuyPagePayment'><Image alt='СБП' src={SBP} height={41} width={52} /></div>
                <div className='BuyPagePayment'><Image alt='Тинькофф' src={TBANK} height={23} width={56} /></div>
                <div className='BuyPagePayment'><Image alt='МИР'  src={MIR} width={52} height={16} /></div>
            </div>
            <button onClick={handlePayment} className='BuyPageBuyButton'>Оплатить</button>
            <div className='BuyPageSmallText'>Нажимая кнопку "Оплатить", вы принимаете Договор-оферту оказания услуг и Политику конфиденциальности</div>
        </div>
    );
};

