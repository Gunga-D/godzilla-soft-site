"use client"
import React from 'react';
import {MainSection} from "./MainSection/MainSection";
import {SeasonSection} from "./SeasonSection/SeasonSection";
import {Container} from "../../styles/Container";
import {BaseSection} from "./BaseSection/BaseSection";

export const MainPage = () => {
    return (
        <div>
            <MainSection/>
            <SeasonSection mainTitle={"Подарок твоему другу"} url={"/sales_items"}/>
            <BaseSection mainTitle={"Новинки"} url={"/new_items"}/>
            <BaseSection mainTitle={"Выбор редакции "} url={"/recomendation_items"}/>
        </div>
    );
};

