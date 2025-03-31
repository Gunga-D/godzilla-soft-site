"use client"

import React, { useState } from 'react';
import "./BuyPageStyle.css"
import SBP from '../../assets/images/Payment/sbp.png';
import MIR from '../../assets/images/Payment/mir.png';
import TBANK from '../../assets/images/Payment/tbank.png';
import { itemApi } from "../../common/api/item/item-api";
import { CreateOrder } from '../../common/api/item/item';
import Image from "next/image";
import { steamGiftApi } from '../../common/api/steam_gift/api';

type BuyPageProps = {
  itemID: number,
  isSteamGift: boolean,
  title?: string,
  description?: string,
}

export const BuyPage = (props: BuyPageProps) => {
    const [inputValue, setInputValue] = useState<string>('');
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
                  data = await itemApi.createGiftOrder(props.itemID, inputValue);
                } else {
                  data = await itemApi.createKeyOrder(props.itemID, inputValue);
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
    return (
        <div className='BuyPageMainContainer'>
            <h2 id='dostavka' className='BuyPageTitle'>{props.title || "Оформление заказа"}</h2>
            <h4 className='BuyPageDescription'>{props.description || props.isSteamGift?"Цифровой товар будет доставлен на данный Steam профиль":"Цифровой товар будет доставлен на указанный е-mail:"}</h4>
            {(!profileAvatar && !profileName) && (
              <input
                className='BuyPageInputValue'
                placeholder={props.isSteamGift?"Введите ссылку на ваш Steam профиль":"Введите email"}
                onChange={handleInputChange}
              />
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

