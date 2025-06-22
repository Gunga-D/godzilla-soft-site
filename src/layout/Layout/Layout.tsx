import React, { ReactNode } from 'react';
import { Footer } from "../footer/Footer";
import {Header} from "../../components/header/Header";
import '../../styles/Container.css'

type LayoutProps = {
    children: ReactNode,
    utm_source: string | undefined
}

export const Layout = (props: LayoutProps) => {
    return (
        <>
        <div className='container'>
            <Header utm_source={props.utm_source}/>
            <div>
                {props.children}
            </div>
            <Footer utm_source={props.utm_source}/>
        </div>
</>
);
};

