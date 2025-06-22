import React from 'react';
import './Header.css'
import '../../styles/Container.css';
import {Logo} from "../logo/logo";
import {Menu} from "../menu/Menu";
import {InputFound} from "../input/InputFound";
import AuthButton from '../authButton/AuthButton';

type HeaderProps = {
    utm_source: string | undefined
}

export const Header = (props: HeaderProps) => {
    return (
        <div className="container">
            <header className = "styled-header">
                <div className='header-wrap'>
                    <Menu utm_source={props.utm_source}/>
                    <AuthButton/>
                </div>
                <div className='header-wrap'>
                    <Logo/>
                    <InputFound/>
                </div>
            </header>
        </div>
    );
};


