import React from 'react';
import {MainSection} from "./MainSection/MainSection";
import { IntroductionBanners } from './IntroductionBanners/IntroductionBanners';
import { GamesSection } from './GamesSection/GamesSection';
import { MoreGames } from '../MoreGames/MoreGames';

type MainProps = {
    utm_source: string | undefined
};

export const MainPage = (props: MainProps) => {
    return (
        <div>
            <MainSection utm_source={props.utm_source}/>
            <IntroductionBanners></IntroductionBanners>
            <GamesSection utm_source={props.utm_source}></GamesSection>
            <MoreGames></MoreGames>
        </div>
    );
};

