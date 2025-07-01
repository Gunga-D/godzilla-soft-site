"use client"

import { useCallback, useEffect, useState } from "react";
import "./SubscriptionProductModalStyle.css"
import { useUser } from "../../common/context/user-context";

type SubscriptionProductModalProps = {
    itemName: string
    login: string
    password: string
    onClose: (e: any) => void
};

const SubscriptionProductModal = (props: SubscriptionProductModalProps) => {
    const onCopy = (text: string) => {
        navigator.clipboard.writeText(text);
    }

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
        <div className="SubscriptionProductModalOverlay">
            {isHinted && (
                <div className="SubscriptionProductInstructionModalOverlay" onClick={()=>{setIsHinted(false)}}>
                    <div className="SubscriptionProductInstructionModalContent">
                        <h2 style={{fontWeight: 900, marginBottom: "5px"}}>Как получить ссылку на свой аккаунт?</h2>
                        <ul style={{marginBottom: '8px'}}>
                          <li>Отключите функцию "Remote Play" в настройках Steam.</li>
                          <li>Отключите облачные сохранения "Steam Cloud" в настройках Steam.</li>
                          <li>Зайдите в раздел "Библиотека" и выберите нужную игру для загрузки.</li>
                          <li>Скачайте и установите игру. После завершения установки перейдите в автономный режим. Запустите игру и наслаждайтесь игровым процессом.</li>
                        </ul>
                        <img src="/Steam Go Offline RU.png"></img>
                    </div>
                </div>
            )}
            <div className='SubscriptionProductModalContainer'>
                <div style={{padding: '28px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <p className='SubscriptionProductModalTitle'>Аккаунт от игры {props.itemName}</p>
                        <div className='SubscriptionhModalCloseContainer' onClick={props.onClose} >
                            <svg role="button" aria-hidden="false" data-icon="close" viewBox="0 0 24 24" className="SubscriptionProductModalClose"><path d="M18.7 5.3a1 1 0 0 0-1.4 0L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3a1 1 0 0 0 1.4-1.42L13.42 12l5.3-5.3a1 1 0 0 0 0-1.4Z"></path></svg>
                        </div>
                    </div>
                    <div className="SubscriptionProductModalDescription">
                        Оффлайн аккаунт Steam, <a className="SubscriptionProductModalSlip" onClick={() => setIsHinted(true)}>пошаговая инструкция по его активации</a>
                    </div>
                    <div className="SubscriptionProductModalAccountContainer">
                        <div className="SubscriptionProductModalAccountField">
                            <h1 className="SubscriptionProductModalAccountFieldTitle">Логин:</h1>
                            <p className="SubscriptionProductModalAccountFieldValue">{props.login}</p>
                            <svg onClick={() => onCopy(props.login)} className="SubscriptionProductModalAccountFieldValueCopyBtn" width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.6 11.1H4.9C4.5287 11.1 4.1726 10.9525 3.91005 10.6899C3.6475 10.4274 3.5 10.0713 3.5 9.7V3.4C3.5 3.0287 3.6475 2.6726 3.91005 2.41005C4.1726 2.1475 4.5287 2 4.9 2H11.2C11.5713 2 11.9274 2.1475 12.1899 2.41005C12.4525 2.6726 12.6 3.0287 12.6 3.4V4.1M9.8 6.9H16.1C16.8732 6.9 17.5 7.5268 17.5 8.3V14.6C17.5 15.3732 16.8732 16 16.1 16H9.8C9.0268 16 8.4 15.3732 8.4 14.6V8.3C8.4 7.5268 9.0268 6.9 9.8 6.9Z' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
                        </div>
                        <div className="SubscriptionProductModalAccountField" style={{borderBottom: 0}}>
                            <h1 className="SubscriptionProductModalAccountFieldTitle">Пароль:</h1>
                            <p className="SubscriptionProductModalAccountFieldValue">{props.password}</p>
                            <svg onClick={() => onCopy(props.password)} className="SubscriptionProductModalAccountFieldValueCopyBtn" width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.6 11.1H4.9C4.5287 11.1 4.1726 10.9525 3.91005 10.6899C3.6475 10.4274 3.5 10.0713 3.5 9.7V3.4C3.5 3.0287 3.6475 2.6726 3.91005 2.41005C4.1726 2.1475 4.5287 2 4.9 2H11.2C11.5713 2 11.9274 2.1475 12.1899 2.41005C12.4525 2.6726 12.6 3.0287 12.6 3.4V4.1M9.8 6.9H16.1C16.8732 6.9 17.5 7.5268 17.5 8.3V14.6C17.5 15.3732 16.8732 16 16.1 16H9.8C9.0268 16 8.4 15.3732 8.4 14.6V8.3C8.4 7.5268 9.0268 6.9 9.8 6.9Z' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionProductModal;