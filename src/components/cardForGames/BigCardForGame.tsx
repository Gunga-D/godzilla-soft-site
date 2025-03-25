import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {ImageComponent} from "../image/Image";
import {Icon} from "../icon/Icon";
import Image from "next/image";

type BigCardForGameProps = {
    imageUrl?: string,
    width?: number,
    height?: number,
    nameGame?: string,
    newPrice?: number,
    oldPrice?: number,
    cursor?: boolean,
    transform?: boolean,
    cardType?: 'bigCard' | 'mediumCard' | 'catalogCard'
    is_for_sale?: boolean,
    onClick?: () => void,
    region?: string,
    platform?: string,

}
export const BigCardForGame = (props: BigCardForGameProps) => {
    const [region, setRegion] = useState('');
    const [platform, setPlatform] = useState('');
    let discount;
    if (props.is_for_sale == true && props.oldPrice && props.newPrice ) {
        discount = Math.round(((props.oldPrice - props.newPrice) / props.oldPrice) * 100);
    }
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
    return (
        <StyledCard
            onClick={props.onClick}
        >
            { region &&
                <IconWrap>
                    <Image
                        src={`/${region}.svg`}
                        alt={region}
                        width={20}
                        height={20}
                        priority
                    />                </IconWrap>
            }
            { platform &&
                <PlatformWrap>
                    <Image
                        src={`/${platform}.svg`}
                        alt={platform}
                        width={22}
                        height={22}
                        priority
                    />
                    <PlatfromName>{platform}</PlatfromName>
                </PlatformWrap>
            }
            <StyledButton>Купить</StyledButton>

            <StyledWrapForPrice>
                <StyledName>{props.nameGame}</StyledName>
                <StyledPrice>
                    <StyledPNewPrice>{props.newPrice}₽</StyledPNewPrice>
                    {props.oldPrice && <StyledPOldPrice>{props.oldPrice}</StyledPOldPrice>}
                </StyledPrice>

            </StyledWrapForPrice>
            <img
                src={props.imageUrl}
                width={239}
                height={239}
            />
            <GradientOverlay/>
        </StyledCard>
    );
};

const StyledCard = styled.div <BigCardForGameProps> `
  position: relative;
  z-index: 0;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
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
const StyledP = styled.p<BigCardForGameProps>`
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
  top: 188px;
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
