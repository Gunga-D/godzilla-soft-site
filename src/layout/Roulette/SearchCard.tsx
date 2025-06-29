'use client'

import './SearchCard.css'
import React, {useState} from "react";
import {RouletteInput} from "./RouletteInput";
import {SearchItem} from "../../common/api/searchItem/searchItem";
import RandomGameCard from "./RandomGameCard";

interface SearchCardProps {
    onGameSelectAction: (game: SearchItem | undefined) => void;
    selectedGame?: SearchItem;
}

export const SearchCard = ({ onGameSelectAction, selectedGame }: SearchCardProps) => {
    return (
        <div className={'searchCard'}>
            <div>
                <RandomGameCard game={selectedGame} />
            </div>
            <RouletteInput
                selectHandlerAction={(game) => {
                    onGameSelectAction(game);
                }}
                searchDefaultText="Поиск"
            />
        </div>
    );
};

