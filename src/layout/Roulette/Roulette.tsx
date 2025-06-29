'use client'

import React, {useState} from "react";
import {SearchCard} from "./SearchCard";
import './action-btn.css'
import rouletteApi from "../../common/api/roulette/api";
import {SearchItem} from "../../common/api/searchItem/searchItem";

export default function Roulette() {
    const nSlots: number = 4
    const [selectedGames, setSelectedGames] = useState<(SearchItem | undefined)[]>([]);

    // Handle game selection for a specific card
    const handleGameSelect = (index: number, game: SearchItem | undefined) => {
        setSelectedGames(prev => {
            const newGames = [...prev];
            newGames[index] = game;
            return newGames;
        });
    };

    const getSelectedGames = (): number[] => {
        const notNullGames = selectedGames.filter(game => game !== undefined) as SearchItem[]
        return notNullGames.map((game: SearchItem) => { return game.item_id }) as number[];
    };

    return <div>
        <ActionButton onClick={ () => {
                console.log(getSelectedGames())
                // rouletteApi.createSession(getSelectedGames())
            }
        }/>
        <div style={{display: "flex", gap: "30px"}}>
            {Array.from({length: nSlots}).map((_, index) => (
                <SearchCard
                    key={index}
                    onGameSelectAction={(game) => handleGameSelect(index, game)}
                    selectedGame={selectedGames[index]}
                />
            ))}
        </div>
    </div>;
}


type ActionButtonProps = {
    onClick?: () => any
}

const ActionButton = ({onClick}: ActionButtonProps) => {
    return (
        <div className="action-btn-container">
            <div className='action-btn' onClick={onClick}>
                <div className="action-btn-title">Подтвердить выбор</div>
            </div>
            <div className="help-icon">
            ?
                <div className="help-tooltip">
                    Выбранные игры получат больший шанс на выпадение
                </div>
            </div>
        </div>
    );
}