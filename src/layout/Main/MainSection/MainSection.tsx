import React from 'react';
import {DefaultBanner} from "../../../components/defaultBanner/DefaultBanner";
import image from "../../../assets/images/Banners/ActualBanner.jpg"
import styled from "styled-components";
import {Image} from "../../../components/image/Image";
import firstPic from "../../../assets/images/picturesForCatalog/popolnenieSteam.png"
import secondPic from "../../../assets/images/picturesForCatalog/randomGame.png"
import thirdPic from "../../../assets/images/picturesForCatalog/games.png"
import fourthPic from "../../../assets/images/picturesForCatalog/allPopolnenie.png"
import {Link} from "react-router-dom";
export const MainSection = () => {
    const MainText = 'Купи стим';
    const SecondaryText = 'бля буду';
    const Description = 'описание чегото, какойто классный текст, хз что писать, в целом для вида и пишу, да! но это не все, ибо мне для дизайна нужно больше текста';
    return (
        <div>
            <DefaultBanner
                            height='' width=""
                           src={image} viewBox='0 0 379 110' iconId='godzillaSoft'
                           heightImg='350px' widthImg='1120px' mainText={MainText} secondaryText={SecondaryText}
                           description={Description}
            />
            <StyledWrapper>

                <Link to={'/catalog/category/10004'}><Image transform={true} hoverEffect={true} cursor={true} src={firstPic} height='220px' width='260px'/></Link>
                <Link to={'*'}> <Image transform={true} hoverEffect={true} cursor={true} src={secondPic} height='220px' width='260px'/></Link>
                <Link to={'/catalog/category/10001'}><Image transform={true} hoverEffect={true} cursor={true} src={thirdPic} height='220px' width='260px'/></Link>
                <Link to={'/catalog/category/10004'}><Image transform={true} hoverEffect={true} cursor={true} src={fourthPic} height='220px' width='260px'/></Link>
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
