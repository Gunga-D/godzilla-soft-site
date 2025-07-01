import React from 'react';
import './MainSectionStyle.css'
import Link from "next/link";
import { NeuroHeader } from '../NeuroHeader/NeuroHeader';
import { RandomGameWidget } from '../RandomGame/RandomGame';
import { addUTM } from '../../../hooks/utm';
import { SubscriptionWidget } from '../SubscriptionWidget/SubscriptionWidget';

type MainSectionProps = {
    utm_source: string | undefined
};

export const MainSection = (props: MainSectionProps) => {
    let gamesLinkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    if (props.utm_source) {
        gamesLinkQuery["utm_source"] = props.utm_source
    }

    return (
        <div className='MainSectionStyledSection'>
            <SubscriptionWidget></SubscriptionWidget>
            <RandomGameWidget></RandomGameWidget>
            <div className='MainSectionStyledWrapper'>
                <Link href={addUTM("/steam_deposit", props.utm_source)} className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">⚡️</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Пополнение Steam</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Быстро и удобно</p>
                    </div>
                </Link>
                <Link href={addUTM("/random", props.utm_source)} className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">🎲</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Случайная игра</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Не знаешь, во что сыграть?</p>
                    </div>
                </Link>
                <Link href={{pathname: "/games", query: gamesLinkQuery}} className="MainSectionStyledRubricatorItemLink">
                    <div className="MainSectionStyledRubricatorItem">
                        <h2 className="MainSectionStyledRubricatorItemEmoji">🎮</h2>
                        <h2 className="MainSectionStyledRubricatorItemTitle">Игры</h2>
                        <p className="MainSectionStyledRubricatorItemDescription">Более 2 000 игр ключами и Steam гифтами</p>
                    </div>
                </Link>
                <Link href={addUTM("/deposits", props.utm_source)} className="MainSectionStyledRubricatorItemLink">
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
