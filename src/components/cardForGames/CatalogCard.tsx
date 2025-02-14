import React from 'react';
import styled from "styled-components";
import {Image} from "../image/Image";

type CatalogCardForGameProps = {
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
    onClick: () => void;
    divWidth?: string,
    divHeight?: string,
}
export const CatalogCard = (props: CatalogCardForGameProps) => {
    let discount;
    if (props.is_for_sale == true && props.oldPrice && props.newPrice ) {
        discount = Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100);
    }
    if (props.cardType == 'bigCard') {

    }
    return (
        <StyledCard
            divWidth={props.divWidth}
            divHeight={props.divHeight}
            cursor={props.cursor}
            transform={props.transform}
            cardType = {props.cardType}
            onClick={props.onClick}
        >
            <StyledButton>Купить</StyledButton>

            <StyledWrapForPrice>
                <StyledName>{props.nameGame}</StyledName>
                <StyledPrice>
                    {props.newPrice && <StyledPNewPrice>{props.newPrice}₽</StyledPNewPrice>}
                    {props.oldPrice && <StyledPOldPrice>{props.oldPrice}</StyledPOldPrice>}
                </StyledPrice>

            </StyledWrapForPrice>
            <Image
                src={props.imageUrl}
                width={props.width}
                height={props.height}
            />
            <GradientOverlay/>
        </StyledCard>
    );
};

const StyledCard = styled.div <CatalogCardForGameProps> `
  position: relative;
  z-index: 0;
  height: 250px;
  width:  250px;

  //background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 42.26%, #000000 100%);
  border: 1px solid #FFFFFF;
  border-radius: 5px;


  transition: transform 0.3s ease;
  cursor: ${props => props.cursor ? 'pointer' : 'default'};
  &:hover {
    cursor: ${props => props.cursor ? 'pointer' : 'default'};
    transform: ${props => props.transform ? 'scale(1.03)' : 'none'};
  }
  img {
    width: 248px;
    height: 248px;
    object-fit: contain;
    object-position: center;
    border-radius: 5px;

  }
`
const GradientOverlay = styled.div`
  position: absolute;
  top: 0;  
  border-radius: 5px;
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
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6.5px;
    z-index: 2;
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 11px;
`;
const StyledP = styled.p<CatalogCardForGameProps>`
  color: white;
  position: absolute;
  font-size: ${props =>
    props.cardType === 'bigCard' ? '20px' :
        props.cardType === 'mediumCard' ? '16px' :
            '12px'
};
  
`;
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
  top: 195px;
  right: 15px;
  z-index: 100;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: #FF333B;
    background: white;
  }
`
const StyledPNewPrice = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 900;
`
const StyledPOldPrice = styled.p`
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
`;
const StyledWrapForPrice = styled.div `
  position: absolute;
  bottom: 16px;
  left: 15px;
  z-index: 23;
  display: flex;
  flex-direction: column;
  
`
const StyledName = styled.div `
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  text-align: left;
  line-height: 24px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  max-width: 110px;
  color: #FFFFFF;
`
const StyledPrice = styled.div `
  display: flex;
  flex-direction: row;
  max-width: 100%;
  gap: 11px;
  height: 20px;
  align-items: center;
`
