import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { ImageComponent } from "../image/Image";
import Image from "next/image";

type CardForGamesProps = {
    imageUrl?: string,
    width?: string,
    height?: string,
    nameGame?: string,
    newPrice?: number,
    oldPrice?: number,
    cursor?: boolean,
    transform?: boolean,
    cardType?: 'bigCard' | 'mediumCard' | 'catalogCard',
    is_for_sale?: boolean,
    onClick?: () => void,
    platform?: string,
    region?: string,
}

export const MediumCardForGames = (props: CardForGamesProps) => {
    const [regionIcon, setRegionIcon] = useState('');
    const [platformIcon, setPlatformIcon] = useState('');
    useEffect(() => {
        if (props.region === 'РФ и СНГ' || props.region === 'РФ') {
            setRegionIcon('rus');
        } else if (props.region === 'Весь мир') {
            setRegionIcon('allWorld');
        } else if (props.region === 'Весь мир кроме РФ') {
            setRegionIcon('rusWithOutSng');
        }

        switch (props.platform) {
            case 'Steam':
                setPlatformIcon('Steam');
                break;
            case 'Microsoft Store':
                setPlatformIcon('Microsoft');
                break;
            case 'Apple':
                setPlatformIcon('Apple');
                break;
            case 'EA Play':
                setPlatformIcon('Origin');
                break;
            case 'Rockstar':
                setPlatformIcon('Rockstar');
                break;
            case 'GOG':
                setPlatformIcon('GOG');
                break;
            case 'Minecraft.net':
                setPlatformIcon('Minecraft');
                break;
            default:
                setPlatformIcon('');
        }
    }, [props.region, props.platform]);

    let discount;
    if (props.is_for_sale && props.oldPrice && props.newPrice) {
        discount = Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100);
    }

    return (
        <StyledCard
            onClick={props.onClick}
            cardType={props.cardType}
        >
            {regionIcon && (
                <IconWrap>
                    <Image
                        src={`/${regionIcon}.svg`}
                        alt={regionIcon}
                        width={22}
                        height={22}
                        priority
                    />
                </IconWrap>
            )}

            {platformIcon && (
                <PlatformWrap>
                    <Image
                        src={`/${platformIcon}.svg`}
                        alt={platformIcon}
                        width={22}
                        height={22}
                        priority
                    />
                    <PlatfromName>{props.platform}</PlatfromName>
                </PlatformWrap>
            )}

            <StyledButton>Купить</StyledButton>

            <StyledWrap>
                <StyledName>{props.nameGame}</StyledName>
                <PriceWrap>
                    <StyledNewPrice>{props.newPrice}₽</StyledNewPrice>
                    {props.oldPrice && <StyledPOldPrice>{props.oldPrice}</StyledPOldPrice>}
                    {props.is_for_sale && <SaleIcon>{discount}%</SaleIcon>}
                </PriceWrap>
            </StyledWrap>

            <img
                src={props.imageUrl}
                width={props.width}
                height={props.height}
            />

            <GradientOverlay />
        </StyledCard>
    );
};

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
`;

const StyledCard = styled.div<CardForGamesProps>`
  position: relative;
  z-index: 0;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`;

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

const StyledPOldPrice = styled.div`
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

const PriceWrap = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  gap: 11px;
  height: 20px;
  align-items: center;
`;

const StyledWrap = styled.div`
  position: absolute;
  bottom: 16px;
  left: 15px;
  z-index: 23;
  display: flex;
  flex-direction: column;
`;

const StyledNewPrice = styled.div`
  color: white;
  font-size: 15px;
  font-weight: 900;
`;

const StyledName = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
  color: #FFFFFF;
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

const PlatformWrap = styled.div`
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
`;

const PlatfromName = styled.p`
  color: rgba(255, 255, 255, 0.85);
  font-weight: 700;
`;
