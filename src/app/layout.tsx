"use client"
import React from 'react';
import { Layout } from "../layout/Layout/Layout";
import '../index.css'
import './layoutStyled.css'
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




