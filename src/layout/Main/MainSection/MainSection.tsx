import React from 'react';
import {DefaultBanner} from "../../../components/defaultBanner/DefaultBanner";
import './MainSectionStyle.css'
import Link from "next/link";

export const MainSection = () => {
    return (
        <div className='MainSectionStyledSection'>
            <DefaultBanner/>
            <div className='MainSectionStyledWrapper'>
                <Link href="/steam_deposit" className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">⚡️</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Пополнение Steam</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Быстро и удобно</p>
                    </div>
                </Link>
                <Link href="/random" className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">🎲</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Случайная игра</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Не знаешь, во что сыграть?</p>
                    </div>
                </Link>
                <Link href={{pathname: "/games", query: {"type": "gift", "category": "popular"}}} className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">🎮</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Игры</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Более 2 000 игр ключами и Steam гифтами</p>
                    </div>
                </Link>
                <Link href="/deposits" className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">🙌</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Пополнения</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Любые сервисы, Apple, Steam и т.д.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};
