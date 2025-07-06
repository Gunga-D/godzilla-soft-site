"use client"

import React, { useState } from 'react';
import "./AuthModalStyle.css"
import TelegramLoginButton from 'telegram-login-button';
import {TelegramUser} from 'telegram-login-button';
import { userApi } from '../../common/api/user/api';
import { useCookies } from 'next-client-cookies';

type AuthModalProps = {
    withoutCloseBtn: boolean
    onClose: (e: any) => void
};

const AuthModal = (props: AuthModalProps) => {
    const cookies = useCookies();

    const [email, setEmail] = useState<string>("")
    const [pwd, setPwd] = useState<string>("")
    const [err, setErr] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const onLogin = () => {
        if (email == '') {
            setErr("Почта не может быть пустой")
            return
        }
        if (pwd == '') {
            setErr("Пароль не может быть пустым")
            return
        }

        const login = async () => {
            try {
                setIsLoading(true)
                const data = await userApi.login(email, pwd)
                let expires = new Date()
                expires.setTime(expires.getTime() + (604800 * 1000))
                cookies.set("access_token", data.data.access_token, { path: '/',  expires})
                cookies.set('user_id', String(data.data.user_id), {path: '/', expires})
                setErr(null)
                props.onClose(null)
                window.location.reload()
            } catch (err: any) {
                setErr(err.response.data.message)
                return;
            } finally {
                setIsLoading(false)
            }
        };
        login()
    }
    const onTelegramLogin = (user: TelegramUser) => {
        const login = async () => {
            try {
                setIsLoading(true)
                const data = await userApi.telegramLogin(user)
                let expires = new Date()
                expires.setTime(expires.getTime() + (604800 * 1000))
                cookies.set("access_token", data.data.access_token, { path: '/',  expires})
                cookies.set('user_id', String(data.data.user_id), {path: '/', expires})
                setErr(null)
                props.onClose(null)
                window.location.reload()
            } catch (err: any) {
                setErr(err.response.data.message)
                return;
            } finally {
                setIsLoading(false)
            }
        };
        login()
        return
    }
    const [isRegistration, setIsRegistration] = useState<boolean>(false)
    const onRegister = () => {
        setEmail("")
        setPwd("")
        setErr(null)

        setIsRegistration(true)
    }
    const onRegistration = () => {
        const register = async () => {
            try {
                setIsLoading(true)
                const data = await userApi.register(email, pwd)
                let expires = new Date()
                expires.setTime(expires.getTime() + (604800 * 1000))
                cookies.set("access_token", data.data.access_token, { path: '/',  expires})
                cookies.set('user_id', String(data.data.user_id), {path: '/', expires})
                setErr(null)
                props.onClose(null)
                window.location.reload()
            } catch (err: any) {
                setErr(err.response.data.message)
                return;
            } finally {
                setIsLoading(false)
            }
        };
        register()
        return
    }
    const onExitOfRegistration = () => {
        setEmail("")
        setPwd("")
        setErr(null)

        setIsRegistration(false)
    }

    const [isForgetPwd, setIsForgetPwd] = useState<boolean>(false)
    const [isForgetPwdRes, setIsForgetPwdRes] = useState<boolean>(false)
    const enterToForgetPwd = () => {
        setEmail("")
        setErr(null)

        setIsForgetPwd(true)
    }
    const onForgetPwd = () => {
        const forgetPwd = async () => {
            try {
                setIsLoading(true)
                await userApi.changePassword(email)
                setIsForgetPwdRes(true)
                setEmail("")
                setErr(null)
            } catch (err: any) {
                setErr(err.response.data.message)
                return;
            } finally {
                setIsLoading(false)
            }
        };
        forgetPwd()
        return
    }
    return (
                <div className='AuthModalOverlay'>
                    {(!isRegistration && !isForgetPwd && !isForgetPwdRes) && (
                        <div className='AuthModalContainer'>
                            <div style={{padding: '28px'}}>
                                <div style={{display: 'flex', marginBottom: '12px'}}>
                                    <p className='AuthModalTitle'>Вход</p>
                                    {!props.withoutCloseBtn && (
                                        <div className='AuthModalCloseContainer' onClick={props.onClose} >
                                            <svg role="button" aria-hidden="false" data-icon="close" viewBox="0 0 24 24" className="AuthModalClose"><path d="M18.7 5.3a1 1 0 0 0-1.4 0L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3a1 1 0 0 0 1.4-1.42L13.42 12l5.3-5.3a1 1 0 0 0 0-1.4Z"></path></svg>
                                        </div>
                                    )}
                                </div>
                                <div className='AuthModalInputContainer'>
                                    <input placeholder='Почта' autoCorrect='false' type='text' spellCheck="false" className='AuthModalInput' onChange={(e: any) => setEmail(e.target.value)} style={{border: err?'1px solid red':'0'}}></input>
                                </div>
                                <div className='AuthModalInputContainer'>
                                    <input placeholder='Пароль' autoCorrect='false' type='password' spellCheck="false" className='AuthModalInput' onChange={(e: any) => setPwd(e.target.value)} style={{border: err?'1px solid red':'0'}}></input>
                                </div>
                                {err && (
                                    <div style={{marginTop: '4px', color: 'red'}}>{err}</div>
                                )}
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                                    <div className='AuthModalSignInButton' onClick={onLogin}>
                                        {isLoading&&(
                                            <span className="AuthModalLoader"></span>
                                        )}
                                        {!isLoading&&(
                                            <span>Войти</span>
                                        )}
                                    </div>
                                    <span style={{marginLeft: 'auto', cursor: 'pointer'}} onClick={enterToForgetPwd}>Забыли пароль?</span>
                                </div>
                            </div>
                            <div className='AuthModalAdditionalSection'>
                                <div>
                                    <p className='AuthModalAnotherVariantsTitle'>Или продолжить через</p>
                                    <TelegramLoginButton botName='godzilla_soft_bot' buttonSize='large' dataOnauth={onTelegramLogin}></TelegramLoginButton>
                                </div>
                                <div style={{marginTop: '18px'}}>
                                    <p className='AuthModalRegistrationTitle'>Нет аккаунта на GODZILLA SOFT?</p>
                                    <button className='AuthModalSignUpButton' onClick={onRegister}>Зарегистрироваться</button>
                                </div>
                                <div style={{marginTop: '14px', color: '#595959', textAlign: 'left', fontSize: '14px'}}>
                                    При регистрации и входе вы соглашаетесь с <a href='/2025_07_06_service_agreement.pdf' className='AuthModalRule'>правилами пользования сайта</a> и с <a href="/2025_07_06_privacy_security.pdf" className='AuthModalRule'>политикой конфиденциальности</a>. 
                                </div>
                            </div>
                        </div>
                    )}
                    {isRegistration && (
                        <div className='AuthModalContainer'>
                            <div style={{padding: '28px'}}>
                                <div style={{display: 'flex', marginBottom: '12px'}}>
                                    <p className='AuthModalTitle'>Регистрация</p>
                                    {!props.withoutCloseBtn && (
                                        <div className='AuthModalCloseContainer' onClick={props.onClose} >
                                            <svg role="button" aria-hidden="false" data-icon="close" viewBox="0 0 24 24" className="AuthModalClose"><path d="M18.7 5.3a1 1 0 0 0-1.4 0L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3a1 1 0 0 0 1.4-1.42L13.42 12l5.3-5.3a1 1 0 0 0 0-1.4Z"></path></svg>
                                        </div>
                                    )}
                                </div>
                                <div className='AuthModalInputContainer'>
                                    <input placeholder='Почта' autoCorrect='false' type='text' spellCheck="false" className='AuthModalInput' onChange={(e: any) => setEmail(e.target.value)} style={{border: err?'1px solid red':'0'}}></input>
                                </div>
                                <div className='AuthModalInputContainer'>
                                    <input placeholder='Пароль' autoCorrect='false' type='password' spellCheck="false" className='AuthModalInput' onChange={(e: any) => setPwd(e.target.value)} style={{border: err?'1px solid red':'0'}}></input>
                                </div>
                                {err && (
                                    <div style={{marginTop: '4px', color: 'red'}}>{err}</div>
                                )}
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                                    <div className='AuthModalSignInButton' onClick={onRegistration}>
                                        {isLoading&&(
                                            <span className="AuthModalLoader"></span>
                                        )}
                                        {!isLoading&&(
                                            <span>Создать профиль</span>
                                        )}
                                    </div>
                                    <div style={{marginLeft: 'auto'}}>Уже есть профиль? <span style={{color: '#ff333b', textDecoration: 'underline', cursor: 'pointer'}} onClick={onExitOfRegistration}>Войти</span></div>
                                </div>
                                <div style={{marginTop: '14px', color: '#595959', textAlign: 'left', fontSize: '14px'}}>
                                    При регистрации и входе вы соглашаетесь с <a href='/2025_07_06_service_agreement.pdf' className='AuthModalRule'>правилами пользования сайта</a> и с <a href="/2025_07_06_privacy_security.pdf" className='AuthModalRule'>политикой конфиденциальности</a>. 
                                </div>
                            </div>
                        </div>
                    )}
                    {(isForgetPwd && !isForgetPwdRes) && (
                        <div className='AuthModalContainer'>
                            <div style={{padding: '28px'}}>
                                <div style={{display: 'flex', marginBottom: '12px'}}>
                                    <p className='AuthModalTitle' style={{fontSize: '28px'}}>Восстановление пароля</p>
                                    {!props.withoutCloseBtn && (
                                        <div className='AuthModalCloseContainer' onClick={props.onClose} >
                                            <svg role="button" aria-hidden="false" data-icon="close" viewBox="0 0 24 24" className="AuthModalClose"><path d="M18.7 5.3a1 1 0 0 0-1.4 0L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3a1 1 0 0 0 1.4-1.42L13.42 12l5.3-5.3a1 1 0 0 0 0-1.4Z"></path></svg>
                                        </div>
                                    )}
                                </div>
                                <div className='AuthModalInputContainer'>
                                    <input placeholder='Почта' autoCorrect='false' type='text' spellCheck="false" className='AuthModalInput' onChange={(e: any) => setEmail(e.target.value)} style={{border: err?'1px solid red':'0'}}></input>
                                </div>
                                {err && (
                                    <div style={{marginTop: '4px', color: 'red'}}>{err}</div>
                                )}
                                <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                                    <div className='AuthModalSignInButton' onClick={onForgetPwd}>
                                        {isLoading&&(
                                            <span className="AuthModalLoader"></span>
                                        )}
                                        {!isLoading&&(
                                            <span>Сбросить текущий пароль</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {isForgetPwdRes && (
                        <div className='AuthModalContainer'>
                            <div style={{padding: '28px'}}>
                                <div style={{marginBottom: '12px'}}>
                                    <p className='AuthModalTitle' style={{fontSize: '21px', textAlign: 'center'}}>Отправили на почту сообщение с новым паролем</p>
                                </div>
                                <button className='AuthModalSignInButton' onClick={props.onClose} style={{width: '100%'}}>Хорошо</button>
                            </div>
                        </div>
                    )}
                </div>
    );
};

export default AuthModal;