'use client';

import React from 'react';
import './Logo.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { addUTM } from '../../hooks/utm';

export const Logo = () => {
    const router = useRouter();
    const pathname = usePathname();

    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source')

    const clickOnLogo = () => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push(addUTM("/", utm_source));
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
