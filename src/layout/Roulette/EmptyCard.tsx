'use client'

import React, {useState} from "react";
import './RandomGameCard.css'

import {GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";

export default function EmptyCard() {
    return <div className={`randomGameCard`}>
            <GiPerspectiveDiceSixFacesRandom color={"purple"} size={"70%"} style={{flexGrow: "1"}}/>
    </div>
}

