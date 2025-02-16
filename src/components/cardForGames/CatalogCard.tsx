import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Image } from "../image/Image";
import { Icon } from "../icon/Icon";

type CatalogCardForGameProps = {
    imageUrl?: string,
    width?: string,
    height?: string,
    nameGame?: string,
    newPrice?: number,
    oldPrice?: number,
    platform?: string,
    cursor?: boolean,
    transform?: boolean,
    cardType?: 'bigCard' | 'mediumCard' | 'catalogCard',
    is_for_sale?: boolean,
    onClick: () => void,
    divWidth?: string,
    divHeight?: string,
    region?: string,
};

export const CatalogCard = (props: CatalogCardForGameProps) => {
    const [region, setRegion] = useState('');
    const [platform, setPlatform] = useState('');

    useEffect(() => {
        if (props.region === 'РФ и СНГ' || props.region === 'РФ') {
            setRegion('rus');
        } else if (props.region === 'Весь мир') {
            setRegion('allWorld');
        } else if (props.region === 'Весь мир кроме РФ') {
            setRegion('rusWithOutSng');
        }

        if (props.platform == 'Steam') {
            setPlatform('Steam')
        } else if (props.platform == 'Microsoft Store') {
            setPlatform('Microsoft')
        }
        else if (props.platform == "Apple") {
            setPlatform('Apple')
        }
        else if (props.platform == 'EA Play') {
            setPlatform('Origin')
        }
        else if (props.platform == 'Rockstar') {
            setPlatform('Rockstar')
        }
         else if (props.platform == "GOG") {
             setPlatform('GOG')
        }
        else if (props.platform == 'Minecraft.net') {
            setPlatform('Minecraft')
        }
    }, [props.region, props.platform]);


    let discount;
    if (props.is_for_sale && props.oldPrice !== undefined && props.newPrice !== undefined) {
        discount = Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100);
    }

    return (
        <StyledCard
            divWidth={props.divWidth}
            divHeight={props.divHeight}
            cursor={props.cursor}
            transform={props.transform}
            cardType={props.cardType}
            onClick={props.onClick}
        >
            { region &&
            <IconWrap>

                <Icon iconId={region} height={'20'} width={'18'} viewBox={'0 0 20 18'} />
            </IconWrap>
            }
            { platform &&
            <PlatformWrap>
                <Icon iconId={platform} height={'22px'} width={'22px'} viewBox={'0 0 22 22'} />
                <PlatfromName>{platform}</PlatfromName>
            </PlatformWrap>
            }
            <StyledButton>Купить</StyledButton>

            {discount && (
                <StyledDiscount>
                    -{discount}%
                </StyledDiscount>
            )}

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
            <GradientOverlay />
        </StyledCard>
    );
};

const StyledCard = styled.div<CatalogCardForGameProps>`
  position: relative;
  z-index: 0;
  height: ${props => props.cardType === 'bigCard' ? '350px' : props.cardType === 'mediumCard' ? '300px' : '250px'};
  width: ${props => props.cardType === 'bigCard' ? '350px' : props.cardType === 'mediumCard' ? '300px' : '250px'};
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  transition: transform 0.3s ease;
  cursor: ${props => props.cursor ? 'pointer' : 'default'};
  &:hover {
    cursor: ${props => props.cursor ? 'pointer' : 'default'};
    transform: ${props => props.transform ? 'scale(1.03)' : 'none'};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 5px;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.11) 42.26%, #000000 100%);
  z-index: 1;
`;

const IconWrap = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  background: rgba(140, 139, 139, 0.58);
  height: 35px;
  width: 35px;
  border-radius: 50%;

`;

const StyledButton = styled.button`
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
    color: #FF333B;
    background: white;
  }
`;

const StyledPNewPrice = styled.p`
  color: white;
  font-size: 15px;
  font-weight: 900;
`;

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

const StyledWrapForPrice = styled.div`
  position: absolute;
  bottom: 16px;
  left: 15px;
  z-index: 23;
  display: flex;
  flex-direction: column;
`;

const StyledName = styled.div`
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
`;

const StyledPrice = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  gap: 11px;
  height: 20px;
  align-items: center;
`;

const StyledDiscount = styled.span`
  font-size: 11px;
  font-weight: 900;
  color: white;
  background-color: #D91E18;
  border-radius: 25px;
  width: 40px;
  height: 19.89px;
  display: flex;
  position: absolute;
  bottom: 65px;
  z-index: 2;
  left: 25px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: -10px;
`;
const  PlatformWrap = styled.div `
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(140, 139, 139, 0.58);
  width: auto;
  height: 30px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 8px;
  border-radius: 50px;
  gap: 5px;
`
const PlatfromName = styled.p `
  color: rgba(255, 255, 255, 0.85);
  font-weight: 700;
`
