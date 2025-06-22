"use client"

import React, { useState } from 'react';
import "./AuthButtonStyle.css"
import AuthModal from '../authModal/AuthModal';
import { useUser } from '../../common/context/user-context';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { addUTM } from '../../hooks/utm';

const AuthButton = () => {
    const {user, isLoading} = useUser()

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        document.body.style.overflowY = 'hidden'
        setIsOpen(true)
    }
    const closeModal = (e: any) => {
        if (e) {
            e.stopPropagation();
        }
        document.body.style.overflowY = 'auto'
        setIsOpen(false)
    }

    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source')
    
    return (
        <div style={{marginLeft: 'auto'}}>
            {(!user && !isLoading) && (
                <div className='AuthButtonStyledContainer' onClick={openModal}>
                    <svg width="14" height="20" viewBox="0 0 14 20"  xmlns="http://www.w3.org/2000/svg" fill='white' className='AuthButtonStyledIcon'>
                        <g>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 7.4a2 2 0 1 1 4 0V9H5zM3.6 9V7.4a3.4 3.4 0 0 1 6.8 0V9H12a1 1 0 0 1 1 1v4.9a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 1 14.9V10a1 1 0 0 1 1-1zm-1.2 1.4v4.5c0 .6.5 1.1 1.1 1.1h7c.6 0 1.1-.5 1.1-1.1v-4.5zM6 14v-1.4h2V14z" />
                        </g>
                    </svg>
                    <div style={{marginLeft: '8px'}} className='AuthButtonStyledText'>Вход и регистрация</div>
                    {isOpen && (
                        <AuthModal onClose={closeModal} withoutCloseBtn={false}></AuthModal>
                    )}
                </div>
            )}
            {isLoading && (
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{borderRadius: '50%', width: '30px', height: '30px', backgroundColor: '#333333'}}></div>
                    <div style={{marginRight: '35px', width: '60px', height: '15px', backgroundColor: '#333333', marginLeft: '8px'}}></div>
                </div>
            )}
            {user && (
                <Link className='ProfileButtonContainer' href={addUTM("/profile", utm_source)} style={{textDecoration: 'none'}}>
                    {user.photo_url?<img src={user.photo_url} width={30} height={30} className='ProfileButtonContainerAvatar'></img>:<img src='/icons8-avatar-96 (1).png' alt='Profile Avatar' width={30} height={30}></img>}
                    <div className='ProfileButtonStyledText'>{user.first_name || user.username || user.email}</div>
                </Link>
            )}
        </div>
    );
};

export default AuthButton;