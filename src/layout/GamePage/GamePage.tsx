"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import '../../styles/Container.css'
import { ItemDetail } from "../../common/api/item-details/item-detail";
import { BuyPage } from "../../components/buyPage/BuyPage";

type GamePageProps = {
    item: ItemDetail;
};

const StyledGamePage = styled.div<{ $backgroundUrl?: string }>`
  //width: 100vw;
  background-image: ${({ $backgroundUrl }) => ($backgroundUrl ? `url(${$backgroundUrl})` : 'none')};
  background-size: cover;
  background-position: center;
  img {
    object-fit: contain;
  }
`;

const StyledMainPage = styled.div`
  display: flex;
  gap: 50px;
  padding: 20px;
  position: relative;
  width: 100%;
  margin-top: 150px;
  z-index: 1;
`;

const Background = styled.div<{ $backgroundUrl?: string; $hasBackground: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: ${({ $backgroundUrl }) => ($backgroundUrl ? `url(${$backgroundUrl})` : 'none')};
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    display: ${({ $hasBackground }) => ($hasBackground ? 'block' : 'none')};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 80px;
    backdrop-filter: blur(2px);
    z-index: 3;
  }
`;

const StyledH2 = styled.h2`
  font-size: 33px;
  overflow-x: hidden;
  color: white;
  height: 30px;
  max-height: 210px;
  padding-top: 0;
  text-align: left;
  word-wrap: break-word;
  flex-grow: 1;
`;

const StyledDescription = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  min-height: 90px;
  line-height: 18px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 20px;
  overflow-x: auto;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-height: 490px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  width: 600px;
  flex-direction: row;
  gap: 40px;
`;

const StyledMiniButton = styled.div<{ $isActive: boolean }>`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: ${({ $isActive }) => ($isActive ? '#ffffff' : 'transparent')};
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: #efefef;
  }
`;

const StyledContentWrapper = styled.div`
  border-radius: 10px;
  color: white;
  width: 100%;
`;

const StyledContent = styled.div`
  color: white;
  height: 108px;
  text-align: left;
  min-height: 80px;
  font-weight: 900;
  overflow-x: auto;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const StyledContentDescription = styled.div`
  color: white;
  text-align: left;
  min-height: 80px;
  height: 108px;
  font-weight: 600;
  overflow-x: auto;
  font-size: 16px;
  line-height: 1.5;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const StyledPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #ffffff;
  text-align: left;
`;

const StyledPNewPrice = styled.p`
  color: white;
  font-size: 51px;
  font-weight: 900;
  margin: 0;
`;

const StyledPOldPrice = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 12px;
  color: #848484;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: line-through;

  &:after {
    content: "₽";
    font-size: 24px;
    margin-left: 2px;
  }
`;

const StyledDiscount = styled.span`
  font-size: 11px;
  font-weight: 900;
  color: white;
  background-color: #D91E18;
  border-radius: 25px;
  width: 62px;
  height: 19.89px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  margin-left: -10px;
  margin-top: 7px;
`;

const StyledBuyButton = styled.button`
  width: 178px;
  height: 51px;
  background: red;
  box-sizing: border-box;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 900;

  &:hover {
    background-color: white;
    cursor: pointer;
    transition: 550ms;
    color: red;
  }
`;

const NotFoundGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  padding: 20px;
  margin-top: 200px;
  margin-bottom: -50px;
`;

const StyledSubtitle = styled.div`
  font-size: 2rem;
  margin: 10px 0;
`;

const StyledText = styled.text`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const StyledReturn = styled.div`
  margin-top: 20px;
  padding: 15px 25px;
  background-color: #ff333b;
  color: #ffffff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transition: 0.4s;
    cursor: pointer;
    color: #ff333b;
    background: white;
  }
`;

const StyledItem = styled.p`
  color: #a8a8a8;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: start;
`;

const GamePage = ({ item }: GamePageProps) => {
    const router = useRouter();
    const [activeButton, setActiveButton] = useState<string>('Характеристики');

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const scroll = () => {
        const element = document.getElementById('dostavka');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const renderContent = () => {
        switch (activeButton) {
            case 'Характеристики':
                return (
                    <StyledContent>
                        <StyledDiv>Регион: <StyledItem>{item.region}</StyledItem></StyledDiv>
                        <StyledDiv>Платформа: <StyledItem>{item.platform}</StyledItem></StyledDiv>
                        {item.creator && <StyledDiv>Разработчик: <StyledItem>{item.creator}</StyledItem></StyledDiv>}
                        {item.publisher && <StyledDiv>Издатель: <StyledItem>{item.publisher}</StyledItem></StyledDiv>}
                    </StyledContent>
                );
            case 'Активация и доставка':
                return (
                    <StyledContentDescription
                        dangerouslySetInnerHTML={{
                            __html: item.slip ? item.slip.replace(/\n/g, '<br />') : 'Информация отсутствует',
                        }}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <StyledGamePage $backgroundUrl={item.background_url}>
            {item.background_url && (
                <Background $backgroundUrl={item.background_url} $hasBackground={!!item.background_url} />
            )}
            <div className="container">
                <StyledMainPage>
                    <img
                        src={item.thumbnail_url}
                        alt=''
                        width={500}
                        height={500}
                    />
                    <StyledTextWrapper>
                        <StyledH2>{item.title}</StyledH2>
                        <StyledDescription>{item.description}</StyledDescription>
                        <StyledButtonWrapper>
                            <StyledMiniButton
                                $isActive={activeButton === 'Характеристики'}
                                onClick={() => handleButtonClick('Характеристики')}
                            >
                                Характеристики
                            </StyledMiniButton>
                            <StyledMiniButton
                                $isActive={activeButton === 'Активация и доставка'}
                                onClick={() => handleButtonClick('Активация и доставка')}
                            >
                                Активация и доставка
                            </StyledMiniButton>
                        </StyledButtonWrapper>
                        <StyledContentWrapper>{renderContent()}</StyledContentWrapper>
                        <StyledPrice>
                            {item.current_price && <StyledPNewPrice>{item.current_price}₽</StyledPNewPrice>}
                            {item.old_price && item.current_price && (
                                <>
                                    <StyledPOldPrice>{item.old_price}</StyledPOldPrice>
                                    <StyledDiscount>
                                        {Math.round(((item.old_price - item.current_price) / item.old_price) * 100)}%
                                    </StyledDiscount>
                                </>
                            )}
                        </StyledPrice>
                        <StyledBuyButton onClick={scroll}>купить</StyledBuyButton>
                    </StyledTextWrapper>
                </StyledMainPage>
                <BuyPage itemID={item.id} />
            </div>
        </StyledGamePage>
    );
};

export default GamePage;
