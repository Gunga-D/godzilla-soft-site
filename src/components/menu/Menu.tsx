
import React from 'react';
import Link from "next/link";
import './MenuStyles.css'

export const Menu = () => {
    return (
        <menu className='menu-styles'>
            <ul className='ul-styles'>
                <Link href={"/catalog"} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Каталог</li></Link>
                <Link href={"/games"} style={{ cursor: 'pointer',textDecoration: 'none' }}><li className='li-styles'>Игры</li></Link>
                <Link href={"/deposits"} style={{ cursor: 'pointer',textDecoration: 'none' }}><li className='li-styles'>Пополнения</li></Link>
                <Link href={"/subscriptions"} style={{ cursor: 'pointer',textDecoration: 'none' }}> <li className='li-styles'>Подписки</li></Link>
            </ul>
        </menu>
    );
};
