import React from 'react';
import '../footer/FooterStyled.css';
import "../../styles/Container.css";

// @ts-ignore
import privacy_security from '../../../public/privacy_security.pdf'
// @ts-ignore

import service_agreement from './../../service_agreement.pdf'
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <div className='container'>
            <footer className="footer">
                <ul className="nav-ul">
                    <Link href={"/catalog"} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Каталог</li></Link>
                    <Link href={"/games"} style={{     cursor: 'pointer', textDecoration: 'none'}}> <li className='li-styles'>Игры</li></Link>
                    <Link href={"/deposits"} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Пополнение</li></Link>
                    <Link href={"/subscriptions"} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Подписки</li></Link>
                    <Link href={"/contacts"} style={{     cursor: 'pointer', textDecoration: 'none'}}><li className='li-styles'>Контакты</li></Link>
                    <Link
                        href="https://t.me/azat_safarg"
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
