"use client"

import { userApi } from "../../common/api/user/api";
import { UserKeyDTO } from "../../common/api/user/types";
import { useUser } from "../../common/context/user-context";
import "./style.css"
import { useCookies } from 'next-client-cookies';
import { useEffect, useState } from "react";

export default function Page() {
    const cookies = useCookies();

    const {user, accessToken} = useUser()

    const onExit = () => {
        cookies.remove("access_token")
        cookies.remove('user_id')

        window.location.pathname = "/"
    }

    const [copyHint, setCopyHint] = useState<string | null>(null)
    const onCopyEnter = () => {
        setCopyHint("Скопировать ID")
    }
    const onCopyOut = () => {
        setCopyHint(null)
    }
    const onCopy = (text: string) => {
        setCopyHint("Скопировано")
        navigator.clipboard.writeText(text);
    }

    const onCopyCode = (text: string) => {
        navigator.clipboard.writeText(text);
    }

    const [keys, setKeys] = useState<UserKeyDTO[]>([]);
    const fetchUserKeys = () => {
        const fetch = async () => {
            try {
                const data = await userApi.keys_history(accessToken!);
                setKeys(data.data)
            } catch (err: any) {
                return;
            }
        };
        fetch()
    }
    useEffect(() => {
        fetchUserKeys()
    }, [])

    return (
        <div style={{marginTop: '150px', width: '100%'}}>
            {user && (
                <div className="ProfileContainer">
                    <div className="ProfileHeader">
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            {user.photo_url?<img src={user.photo_url} width={90} height={90} className='ProfileAvatar'></img>:<img src='/icons8-avatar-96 (1).png' alt='Profile Avatar' width={90} height={90}></img>}
                        </div>
                        <div style={{marginTop: '21px', display: 'flex', alignItems: 'start', width: 'fit-content', marginLeft: 'auto', marginRight: 'auto', position: 'relative'}}>
                            <div style={{fontSize: '16px', fontWeight: '600', color: 'white', opacity: '0.5', marginRight: '5px'}}>
                                User ID: {user.user_id}
                            </div>
                            <div style={{cursor: 'pointer', opacity: '0.5'}} onMouseEnter={onCopyEnter} onMouseLeave={onCopyOut} onClick={() => onCopy(String(user.user_id))}>
                                <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.6 11.1H4.9C4.5287 11.1 4.1726 10.9525 3.91005 10.6899C3.6475 10.4274 3.5 10.0713 3.5 9.7V3.4C3.5 3.0287 3.6475 2.6726 3.91005 2.41005C4.1726 2.1475 4.5287 2 4.9 2H11.2C11.5713 2 11.9274 2.1475 12.1899 2.41005C12.4525 2.6726 12.6 3.0287 12.6 3.4V4.1M9.8 6.9H16.1C16.8732 6.9 17.5 7.5268 17.5 8.3V14.6C17.5 15.3732 16.8732 16 16.1 16H9.8C9.0268 16 8.4 15.3732 8.4 14.6V8.3C8.4 7.5268 9.0268 6.9 9.8 6.9Z' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
                            </div>
                            {copyHint && (
                                <div style={{backgroundColor: 'rgb(48, 49, 57)', color: 'white', position: 'absolute', bottom: '-30px', right: '-115px', padding: '5px 8px'}}>
                                    {copyHint}
                                </div>
                            )}
                        </div>
                        <h1 style={{color: 'white', textAlign: 'center'}}>{user.first_name || user.username || 'Не задано'}</h1>
                    </div>
                    <div>
                        <div className="ProfileDataContainer">
                            <div className="ProfileDataPlate">
                                <div className="ProfileDataPlateKey">Почта:</div>
                                <div className="ProfileDataPlateValue">{user.email?user.email:"Еще не привязана"}</div>
                            </div>
                            <div className="ProfileDataPlate">
                                <div className="ProfileDataPlateKey">Steam профиль:</div>
                                <div className="ProfileDataPlateValue">{user.steam_link?user.steam_link:"Еще не привязан"}</div>
                            </div>
                        </div>
                    </div>
                    <div className="ProfileHistoryKeys">
                        <h3 style={{color: 'white'}}>Мои ключи</h3>
                        <div className="ProfileHistoryKeysContainer">
                            {keys.length == 0 && (
                                <div style={{color: 'white', textAlign: 'center', backgroundColor: 'rgb(27 28 34 / 1)', borderRadius: '8px', padding: '10px 0px', fontWeight: '900', border: '1px solid hsla(0, 0%, 100%, .051)'}}>Нет покупок</div>
                            )}
                            {keys.map((key, idx) => (
                                <div key={idx} className="ProfileHistoryKeyItem">
                                    <div>
                                        <p className="ProfileHistoryKeyItemName">{key.item_name}</p>
                                        <div style={{display: 'flex', gap: '5px', alignItems: 'center'}}>
                                            <div style={{cursor: 'pointer', opacity: '0.5'}} onClick={() => onCopyCode(String(key.code))}>
                                                <svg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.6 11.1H4.9C4.5287 11.1 4.1726 10.9525 3.91005 10.6899C3.6475 10.4274 3.5 10.0713 3.5 9.7V3.4C3.5 3.0287 3.6475 2.6726 3.91005 2.41005C4.1726 2.1475 4.5287 2 4.9 2H11.2C11.5713 2 11.9274 2.1475 12.1899 2.41005C12.4525 2.6726 12.6 3.0287 12.6 3.4V4.1M9.8 6.9H16.1C16.8732 6.9 17.5 7.5268 17.5 8.3V14.6C17.5 15.3732 16.8732 16 16.1 16H9.8C9.0268 16 8.4 15.3732 8.4 14.6V8.3C8.4 7.5268 9.0268 6.9 9.8 6.9Z' stroke='white' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
                                            </div>
                                            <div className="ProfileHistoryKeyItemCode">{key.code}</div>
                                        </div>
                                    </div>
                                    <div className="ProfileHistoryKeyItemStatus">
                                        {parseOrderStatus(key.status)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ProfileExitButton" onClick={onExit}>Выйти из профиля</div>
                </div> 
            )}
        </div>
    );
}

function parseOrderStatus(status: string): string {
    if (status == 'paid') {
        return "Оплачен"
    }
    if (status == 'finished') {
        return "Доставлен"
    }
    return "Неизвестно"
}
