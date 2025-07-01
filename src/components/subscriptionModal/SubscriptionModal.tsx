"use client"

import { useState } from "react";
import "./SubscriptionModalStyle.css"
import { useUser } from "../../common/context/user-context";
import { subApi } from "../../common/api/subcription/api";
import ErrorToast from "../errorToast/ErrorToast";
import { useCookies } from 'next-client-cookies';

type SubscriptionModalProps = {
    withoutCloseBtn: boolean
    onClose: (e: any) => void
};

const SubscriptionModal = (props: SubscriptionModalProps) => {
    const {user, accessToken} = useUser()

    const cookies = useCookies();

    const [selected, setSelected] = useState<'month' | 'year'>('month');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [err, setError] = useState<string | null>(null)
    const onSubscribe = () => {
        if (!user && (!email || email == "")) {
            setError("Почта не должна быть пустой")
            return
        }
        const subscribe = async () => {
            try {
                setIsLoading(true)
                const data = await subApi.subscribe(selected, accessToken, email)
                if (data.data.user_access_token) {
                    let expires = new Date()
                    expires.setTime(expires.getTime() + (604800 * 1000))
                    cookies.set("access_token", data.data.user_access_token, { path: '/',  expires})
                }
                window.open(data.data.redirect_link, "_self");
            } catch (err: any) {
                setError(err.response.data.message)
            } finally {
                setIsLoading(false)
            }
        };
        subscribe()
        return
    }

    const [email, setEmail] = useState<string | null>(null)
    return (
        <div className="SubscriptionModalOverlay">
            {err && (
                <ErrorToast message={err} onClose={() => setError(null)} duration={3000}></ErrorToast>
            )}
            <div className='SubscriptionModalContainer'>
                <div style={{padding: '28px'}}>
                    <div style={{display: 'flex', marginBottom: '12px', alignItems: 'center'}}>
                        <p className='SubscriptionModalTitle'>Подписка GODZILLA SOFT</p>
                        {!props.withoutCloseBtn && (
                            <div className='SubscriptionhModalCloseContainer' onClick={props.onClose} >
                                <svg role="button" aria-hidden="false" data-icon="close" viewBox="0 0 24 24" className="AuthModalClose"><path d="M18.7 5.3a1 1 0 0 0-1.4 0L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3a1 1 0 0 0 1.4-1.42L13.42 12l5.3-5.3a1 1 0 0 0 0-1.4Z"></path></svg>
                            </div>
                        )}
                    </div>
                    <div className="SubscriptionModalDescription">
                        <b>Больше свободы</b> и <b>десятки игр с платформы Steam</b>, которые будут доступны по подписке.
                    </div>
                    <div>
                    <div className="SubscriptionModalDescriptionPlanSelector">
                        <div
                            className={`SubscriptionModalDescriptionPlanOption ${selected === 'year' ? 'selected' : ''}`}
                            onClick={() => setSelected('year')}
                        >
                            <div className="SubscriptionModalDescriptionPlanRadioCirle">
                                {selected === 'year' && <div className="SubscriptionModalDescriptionPlanRadioDot" />}
                            </div>
                            <div className="SubscriptionModalDescriptionPlanOptionDetails">
                                <div className="SubscriptionModalDescriptionPlanOptionTitle">
                                    Ежегодно <span className="SubscriptionModalDescriptionPlanOptionDiscount">-50%</span>
                                </div>
                                <div className="SubscriptionModalDescriptionPlanOptionPrice">1 500 ₽ в год</div>
                            </div>
                        </div>

                        <div
                            className={`SubscriptionModalDescriptionPlanOption ${selected === 'month' ? 'selected' : ''}`}
                            onClick={() => setSelected('month')}
                        >
                            <div className="SubscriptionModalDescriptionPlanRadioCirle">
                                {selected === 'month' && <div className="SubscriptionModalDescriptionPlanRadioDot" />}
                            </div>
                            <div className="SubscriptionModalDescriptionPlanOptionDetails">
                                <div className="SubscriptionModalDescriptionPlanOptionTitle">Ежемесячно</div>
                                <div className="SubscriptionModalDescriptionPlanOptionPrice">250 ₽ в месяц</div>
                            </div>
                        </div>
                        {!user && (
                            <div className="SubscriptionModalRegistrationBlock">
                                <div className="SubscriptionModalRegistrationTitle">На почту придут данные от вашего личного кабинета</div>
                                <input className="SubscriptionModalRegistrationInput" placeholder="Введите ваш email" onChange={(e: any) => setEmail(e.target.value)}></input>
                            </div>
                        )}
                        </div>
                    </div>
                    <div className="SubscriptionModalFeature">
                        <div className="SubscriptionModalFeatureIcon">🎮</div>
                        <div className="SubscriptionModalFeatureContent">
                            <div className="SubscriptionModalFeatureTitleLine">
                                <span className="SubscriptionModalFeatureTitle">Доступ к дорогим играм</span>
                                <span className="SubscriptionModalFeatureBadge">ОСНОВНОЕ</span>
                            </div>
                            <div className="SubscriptionModalFeatureDescription">Всего лишь за {selected == 'month' ? '250' : '1 500'} ₽ в {selected == 'month' ? 'месяц' : 'год'} вы получите доступ к постоянно обновляемому каталогу игр на платформе Steam.</div>
                        </div>
                    </div>
                    <div className="SubscriptionModalFooter">
                        <div className="SubscriptionModalConnectRules">Оформляя подписку GODZILLA SOFT, Вы подтверждаете, что ознакомились с условиями <a className="SubscriptionModalConnectRuleLink">Пользовательского соглашения</a> и <a className="SubscriptionModalConnectRuleLink">Политики конфиденциальности</a>.</div>
                        <div className="SubscriptionModalConnectButton" onClick={onSubscribe}>
                        {isLoading && (
                            <span className="SubscriptionModalConnectButtonLoader"></span>
                        )}
                        {!isLoading && (
                            <span>Подключить за {selected == 'month' ? '250' : '1 500'} ₽ в {selected == 'month' ? 'месяц' : 'год'}</span>
                        )}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionModal;