import React from 'react';
import { Layout } from "../layout/Layout/Layout";
import '../index.css'
import './layoutStyled.css'
import {Metadata} from "next";
import { CookiesProvider } from 'next-client-cookies/server';
import { UserProvider } from '../common/context/user-context';
import { headers } from "next/headers";

export const metadata: Metadata = {
    metadataBase: new URL('https://godzillasoft.ru'),
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
        other: [
            { rel: 'alternate', url: 'https://m.godzillasoft.ru/', media: "only screen and (max-width: 640px)" },
        ]
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

export default async function RootLayout({ children }: RootLayoutProps) {
    const headerStore = await headers();
    const searchParams = Object.fromEntries(
        new URLSearchParams(headerStore.get("searchParams") || "")
    );
    return (
        <html lang="ru">
        <body>
            <div className='flex-wrapper'>
                <div className={'main-app'}>
                {/* @ts-expect-error Server Component */}
                <CookiesProvider>
                    <UserProvider>
                        <Layout utm_source={searchParams["utm_source"]}>
                            {children}
                        </Layout>
                    </UserProvider>
                </CookiesProvider>
            </div>
        </div>
        </body>
        </html>
    );
}




