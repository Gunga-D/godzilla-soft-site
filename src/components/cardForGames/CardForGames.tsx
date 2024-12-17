import React from 'react';
import styled from "styled-components";
import {Image} from "../image/Image";

type CardForGamesProps = {
    imageUrl?: string,
    width?: string,
    height?: string,
}
export const CardForGames = (props: CardForGamesProps) => {
    return (
        <StyledCard>
            <Image src={props.imageUrl} width={props.width} height={props.height} hoverEffect={true} cursor={true}/>
        </StyledCard>
    );
};

const StyledCard = styled.div `
    
`
