import React from 'react';
import styled from "styled-components";
import {Image} from "../image/Image";

type CardForGamesProps = {
    imageUrl?: string,
    width?: string,
    height?: string,
    nameGame?: string,
    newPrice?: number,
    oldPrice?: number,
}
export const CardForGames = (props: CardForGamesProps) => {
    return (
        <StyledCard>
            {/*<StyledButton>Купить</StyledButton>*/}
            {/*<SP>{props.nameGame}</SP>*/}
            {/*<div>*/}
            {/*    <SP>{props.newPrice}</SP>*/}
            {/*    <SP>{props.oldPrice}</SP>*/}
            {/*</div>*/}
            <Image src={props.imageUrl} width={props.width} height={props.height}  cursor={true}/>
        </StyledCard>
    );
};

const StyledCard = styled.div `
  position: relative;
  z-index: 0;
  //background-image:  ;
`
