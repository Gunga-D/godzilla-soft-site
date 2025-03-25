import React from 'react';
import './Header.css'
import '../../styles/Container.css';
import {Logo} from "../logo/logo";
import {Menu} from "../menu/Menu";
import {InputFound} from "../input/InputFound";



export const Header = () => {
    return (
        <div className="container">
        <header className = "styled-header">
                <div className='header-wrap'>
                    <Logo/>
                    <Menu/>
                    <InputFound/>
                </div>
        </header>
        </div>
    );
};


