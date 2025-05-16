import React from 'react';
import './Header.css'
import '../../styles/Container.css';
import {Logo} from "../logo/logo";
import {Menu} from "../menu/Menu";
import {InputFound} from "../input/InputFound";
import AuthButton from '../authButton/AuthButton';



export const Header = () => {
    return (
        <div className="container">
            <header className = "styled-header">
                <div className='header-wrap'>
                    <Menu/>
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


