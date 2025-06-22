
import React from 'react';
import Link from "next/link";
import './MenuStyles.css'
import { addUTM } from '../../hooks/utm';

type MenuProps = {
    utm_source: string | undefined
}

export const Menu = (props: MenuProps) => {
    let gamesGiftLinkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    if (props.utm_source) {
        gamesGiftLinkQuery["utm_source"] = props.utm_source
    }

    return (
        <menu className='menu-styles'>
            <ul className='ul-styles'>
                <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Каталог</li></Link>
                <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} style={{ cursor: 'pointer',textDecoration: 'none' }}><li className='li-styles'>Игры</li></Link>
                <Link href={addUTM("/deposits", props.utm_source)} style={{ cursor: 'pointer',textDecoration: 'none' }}><li className='li-styles'>Пополнения</li></Link>
                <Link href={addUTM("/subscriptions", props.utm_source)} style={{ cursor: 'pointer',textDecoration: 'none' }}> <li className='li-styles'>Подписки</li></Link>
            </ul>
        </menu>
    );
};
