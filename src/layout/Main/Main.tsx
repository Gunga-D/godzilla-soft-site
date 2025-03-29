import React from 'react';
import {MainSection} from "./MainSection/MainSection";
import {SeasonSection} from "./SeasonSection/SeasonSection";
import {BaseSection} from "./BaseSection/BaseSection";
import { IntroductionBanners } from './IntroductionBanners/IntroductionBanners';

export const MainPage = () => {
    return (
        <div>
            <MainSection/>
            <IntroductionBanners></IntroductionBanners>
            {/* <SeasonSection mainTitle={"Подарок твоему другу"} url={"/sales_items"}/> */}
            <BaseSection mainTitle={"Новинки"} url={"/new_items"}/>
            <BaseSection mainTitle={"Выбор редакции "} url={"/recomendation_items"}/>
        </div>
    );
};

