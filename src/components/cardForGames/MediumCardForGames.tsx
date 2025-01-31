import React from 'react';
import styled from "styled-components";
import {Image} from "../image/Image";

type CardForGamesProps = {
    imageUrl?: string,
    width?: string,
    height?: string,
    nameGame?: string,
    newPrice?: number,
    // shadowEffect?: string,
    oldPrice?: number,
    cursor?: boolean,
    transform?: boolean,
    cardType?: 'bigCard' | 'mediumCard' | 'catalogCard'
    is_for_sale?: boolean,
    onClick?: () => void,
}
export const MediumCardForGames = (props: CardForGamesProps) => {
    let discount;
    if (props.is_for_sale == true && props.oldPrice && props.newPrice ) {
         discount = Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100);
    }
    if (props.cardType == 'bigCard') {

    }
    return (
        <StyledCard
            onClick={props.onClick}
            cursor={props.cursor}
            transform={props.transform}
            cardType = {props.cardType}
        >
            <StyledButton>Купить</StyledButton>
            <StyledWrap>
               <StyledName>{props.nameGame}</StyledName>
                <PriceWrap>
                    <StyledNewPrice>{props.newPrice}₽</StyledNewPrice>
                    {props.oldPrice && <StyledPOldPrice>{props.oldPrice}</StyledPOldPrice>}
                    {props.is_for_sale && <SaleIcon> {discount+"%"} </SaleIcon>}
                </PriceWrap>
            </StyledWrap>
            <Image
                src={props.imageUrl}
                width={props.width}
                height={props.height}
                />
            <GradientOverlay/>
        </StyledCard>
    );
};
const StyledButton = styled.button `
  width: 92px;
  height: 34px;
  background: #FF333B;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 900;
  border: none;
  position: absolute;
  top: 105px;
  opacity: 0;
  left: 15px;
  z-index: 100;
  transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: #FF333B;
    background: white;
  }
`

const StyledCard = styled.div <CardForGamesProps> `
  position: relative;
  z-index: 0;
  transition: transform 0.3s ease;
  cursor: ${props => props.cursor ? 'pointer' : 'default'};
  &:hover {
    ${StyledButton} {
      opacity: 1;
      visibility: visible;
    }
    cursor: ${props => props.cursor ? 'pointer' : 'default'};
    transform: ${props => props.transform ? 'scale(1.03)' : 'none'};
  }
  //TODO: уточнить корректный трансформ размер
  //background-image:  ;
`
const GradientOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 42.26%, #000000 100%);
    
    z-index: 1;
`;

const SaleIcon = styled.div`
    width: 40px; 
    height: 14px; 
    background: red;
    margin-left: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6.5px;
    z-index: 2;
    font-weight: 900;
    font-size: 11px;
`;

const StyledPOldPrice = styled.div `
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 12px;
  color: #848484;
  position: relative;
  display: inline-block;
  width: auto;

  &:after {
    content: "₽";
    font-size: 10px;
    margin-left: 2px;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 1px;
    background-color: #D91E18;
    transform: rotate(-15deg);
    transform-origin: center;
  }
`
const PriceWrap = styled.div `
  display: flex;
  flex-direction: row;
  max-width: 100%;
  gap: 11px;
  height: 20px;
  align-items: center;
`
const StyledWrap = styled.div `
  position: absolute;
  bottom: 16px;
  left: 15px;
  z-index: 23;
  display: flex;
  flex-direction: column;
`
const StyledNewPrice = styled.div `
  color: white;
  font-size: 15px;
  font-weight: 900;
`
const StyledName = styled.div `
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
  color: #FFFFFF;
`
