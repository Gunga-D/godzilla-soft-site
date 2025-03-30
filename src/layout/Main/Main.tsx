import React from 'react';
import {MainSection} from "./MainSection/MainSection";
import { IntroductionBanners } from './IntroductionBanners/IntroductionBanners';
import { GamesSection } from './GamesSection/GamesSection';

export const MainPage = () => {
    return (
        <div>
            <MainSection/>
            <IntroductionBanners></IntroductionBanners>
            <GamesSection></GamesSection>
        </div>
    );
};

