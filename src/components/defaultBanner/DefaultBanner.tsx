import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Image} from "../image/Image";
import {useLocation, useNavigate} from "react-router-dom";

type DefaultBannerType = {
    mainText?: string,
    iconId?: string,
    height?: string,
    width?: string,
    viewBox?: string,
    secondaryText?: string,
    description?: string,
    src?: string,
    widthImg?: string,
    heightImg?: string,
}
export const DefaultBanner = (props: DefaultBannerType) => {
    const navigate = useNavigate();
    const location = useLocation();
    const clickOnLogo = () => {
        navigate('/games');

    };
    return (
        <StyledWrapper onClick={clickOnLogo}>
                <Image src={props.src} width={props.widthImg} cursor={true} height={props.heightImg}/>
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div `
    display: flex;
    margin-top: 90px;
  //width: 1120px;
  //height: 350px;
  background: #FFFFFF;
  justify-content: space-between;
  border-radius: 5px;

`
const PlaceForText = styled.div `
    max-width: 551px;
    font-size: 96px;
    margin-top: 102px;
    font-weight: 800;
    text-align: center;
    margin-left: 23px;
`
const PlaceForImg = styled.div `
`
const DivForIcon = styled.div `
    position: absolute;
    margin-top: -50px;
    margin-left: -24px;
`
const StyledH1 = styled.h1 `
  font-style: normal;
  line-height: 102px;
  font-weight: 1000;
  font-size: 96px;
`
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 34px;
  margin-bottom: 21px;
  text-align: center;
`
const StyledP = styled.p `
  font-style: normal;
  max-width: 440px;
  font-weight: 900;
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
`
