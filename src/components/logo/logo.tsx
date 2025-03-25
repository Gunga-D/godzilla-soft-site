'use client';

import React from 'react';
import './Logo.css';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export const Logo = () => {
    const router = useRouter();
    const pathname = usePathname();

    const clickOnLogo = () => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    return (
        <div
            onClick={clickOnLogo}
            className='styled-wrap'
        >
            <img src='/Logo.png' height='48px' width='157px' alt='Логотип Годзилла-Софт' />
        </div>
    );
};
