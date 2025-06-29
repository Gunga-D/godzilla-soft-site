'use client'

import React, {useState} from "react";
import './RandomGameCard.css'
import {SearchItem} from "../../common/api/searchItem/searchItem";
import EmptyCard from "./EmptyCard";

type RandomGameCardProps = {
    game?: SearchItem
}

export default function RandomGameCard({game}: RandomGameCardProps) {
    if (!game)
        return <EmptyCard/>;

    const gameRef: SearchItem = game as SearchItem

    return (
        <div className={`randomGameCard`}>
            <img
                src={gameRef.item_thumbnail_url}
                alt={gameRef.item_title}
            />
            <div className="randomGameCardTitle">{gameRef.item_title}</div>
        </div>
    )
}