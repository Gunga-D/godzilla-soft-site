import React, {ReactNode} from 'react';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";

type LayoutProps = {
    children: ReactNode,
    pageId?: string,
}
export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
    return (
        <div>
            <Header activePage={props.pageId}/>
                {props.children}
            <Footer/>
        </div>
    );
};

