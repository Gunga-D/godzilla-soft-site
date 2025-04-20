import React from 'react';
import { Layout } from "../layout/Layout/Layout";
import '../index.css'
import './layoutStyled.css'
import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://godzillasoft.ru'),
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico"
    },
    title: 'GODZILLA SOFT — интернет-магазин видеоигр',
    description: 'GODZILLA SOFT — интернет-магазин видеоигр и не только. Низкие цены, широкий ассортимент и моментальная доставка. Мам, купи!',
    keywords: "купить ключи Steam, пополнить баланс Steam, цифровые товары, ключи для игр, купить игры дешево, магазин Steam ключей, пополнение Steam кошелька, цифровые подписки, игровые ключи активации, купить ключ для Steam, дешевые игры Steam, пополнить Steam мгновенно, купить подписки для игр, магазин цифровых товаров, активация ключей Steam, купить игры онлайн, пополнение Steam баланса, ключи для популярных игр, цифровые коды для игр, надежный магазин ключей",
    openGraph: {
        type: "website",
        url: "/",
        title: "GODZILLA SOFT — интернет-магазин видеоигр",
        description: "GODZILLA SOFT — интернет-магазин видеоигр и не только. Низкие цены, широкий ассортимент и моментальная доставка. Мам, купи!",
        siteName: "GODZILLA SOFT",
        images: "/og_favicon_1200x675.png" ,
    },
    alternates: {
        canonical: `/`,
    },
    verification: {
        google: "yBdanPfHhKzurKwvOXJNkJ_QQkxMY39qqx5xT3XowqA",
        yandex: "123e61a415af07fb"
    }
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
        <body>
            <div className='flex-wrapper'>
                <div className={'main-app'}>
                <Layout pageId="">
                    {children}
                </Layout>
            </div>
        </div>
        </body>
        </html>
    );
}




