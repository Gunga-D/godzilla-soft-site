import React from 'react';
import {MainSection} from "./MainSection/MainSection";
import {SeasonSection} from "./SeasonSection/SeasonSection";
import {Container} from "../../styles/Container";
import {BaseSection} from "./BaseSection/BaseSection";

export const Main = () => {
    return (
        <Container>
            <MainSection/>
            <SeasonSection mainTitle={"Пополни стим своему другу"} url={"/items?limit=100&category_id=10004"}/>
            <BaseSection mainTitle={"Новинки"} url={"/new_items"}/>
            <BaseSection mainTitle={"Выбор редакции "} url={"/recomendation_items"}/>
        </Container>
    );
};

