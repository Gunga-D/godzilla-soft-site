import React from 'react';
import '../footer/FooterStyled.css';
import "../../styles/Container.css";

import Image from "next/image";
import Link from "next/link";
import { addUTM } from '../../hooks/utm';

type FooterProps = {
    utm_source: string | undefined
}

export const Footer = (props: FooterProps) => {
    let gamesGiftLinkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    if (props.utm_source) {
        gamesGiftLinkQuery["utm_source"] = props.utm_source
    }
    
    return (
        <div className='container'>
            <footer className="footer">
                <ul className="nav-ul">
                    <Link href={addUTM("/blog", props.utm_source)} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Блог</li></Link>
                    <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Каталог</li></Link>
                    <Link href={{pathname: "/games", query: gamesGiftLinkQuery}} style={{     cursor: 'pointer', textDecoration: 'none'}}> <li className='li-styles'>Игры</li></Link>
                    <Link href={addUTM("/deposits", props.utm_source)} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Пополнение</li></Link>
                    <Link href={addUTM("/subscriptions", props.utm_source)} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Подписки</li></Link>
                    <Link href={addUTM("/contacts", props.utm_source)} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Контакты</li></Link>
                    <Link
                        href="https://t.me/GODZILLASOFT_bot"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        <li className='li-styles'>Поддержка</li>
                    </Link>
                </ul>
                <div className="payment-ul">
                    <Image src='/VISA.svg' alt='VISA' width={74} height={23}/>
                    <Image src='/MIR.svg' alt='MIR' width={84} height={26}/>
                    <Image src='/MasterCard.svg' alt='MIR' width={133} height={26}/>
                </div>
                <div className="documents">
                    <li><a href="/privacy_security.pdf">Политика конфиденциальности</a></li>
                    <li><a href="/service_agreement.pdf">Лицензионный договор-оферта</a></li>
                </div>
            </footer>
        </div>
    );
};
