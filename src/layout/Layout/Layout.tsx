import React, { ReactNode } from 'react';
import { Footer } from "../footer/Footer";
import {Header} from "../../components/header/Header";
import '../../styles/Container.css'
type LayoutProps = {
    children: ReactNode,
    pageId?: string,
}

export const Layout = (props: LayoutProps) => {
    return (
        <>
        <div className='container'>
            <Header />
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
</>
);
};

