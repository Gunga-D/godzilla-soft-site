import React from 'react';
import {DefaultBanner} from "../../../components/defaultBanner/DefaultBanner";
import image from "../../../assets/images/godzilaPaint.png"
import styled from "styled-components";
import {Image} from "../../../components/image/Image";
import firstPic from "../../../assets/images/picturesForCatalog/popolnenieSteam.png"
import secondPic from "../../../assets/images/picturesForCatalog/randomGame.png"
import thirdPic from "../../../assets/images/picturesForCatalog/games.png"
import fourthPic from "../../../assets/images/picturesForCatalog/allPopolnenie.png"
export const MainSection = () => {
    const MainText = 'Купи стим';
    const SecondaryText = 'бля буду';
    const Description = 'описание чегото, какойто классный текст, хз что писать, в целом для вида и пишу, да! но это не все, ибо мне для дизайна нужно больше текста';
    return (
        <div>
            <DefaultBanner height='110' width="379"
                           src={image} viewBox='0 0 379 110' iconId='godzillaSoft'
                           heightImg='350px' widthImg='535px' mainText={MainText} secondaryText={SecondaryText}
                           description={Description}
            />
            <StyledWrapper>
                <Image hoverEffect={true} cursor={true} src={firstPic} height='220px' width='260px'/>
                <Image hoverEffect={true} cursor={true} src={secondPic} height='220px' width='260px'/>
                <Image hoverEffect={true} cursor={true} src={thirdPic} height='220px' width='260px'/>
                <Image hoverEffect={true} cursor={true} src={fourthPic} height='220px' width='260px'/>
            </StyledWrapper>
        </div>
    );
};

const StyledWrapper = styled.div `
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 40px;
`
