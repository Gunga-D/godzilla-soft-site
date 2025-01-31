import React, { useEffect, useState } from 'react';
import { itemDetailsApi } from '../../common/api/item-details/item-details-api';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../../common/api/item-details/item-detail';
import { Container } from '../../styles/Container';
import { Image } from '../../components/image/Image';
import styled from 'styled-components';
import {BuyPage} from "../../components/buyPage/BuyPage";

export const GamePage = () => {
    const [item, setItem] = useState<ItemDetail | null>(null);
    const { id } = useParams();
    const [activeButton, setActiveButton] = useState<string>('Характеристики');
    const scroll = () => {
        const element = document.getElementById('dostavka');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await itemDetailsApi.getItem(`${id}`);
                setItem(data);
            } catch (err) {
                console.error('Ошибка при загрузке данных:', err);
            }
        };
        fetchItem();
    }, [id]);

    if (!item) {
        return <div>Загрузка...</div>;
    }

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };


    const renderContent = () => {
        switch (activeButton) {
            case 'Характеристики':
                return (
                    <StyledContent>
                        <ul>
                            <li>Регион: {item.region}</li>
                            <li>Платформа: {item.platform}</li>
                        </ul>
                    </StyledContent>
                );
            case 'Активация и доставка':
                return (
                    <StyledContent>
                        {item.slip}
                    </StyledContent>
                );

            default:
                return null;
        }
    };

    return (
        <StyledGamePage>
            <Container>
                <StyledMainPage>
                    <Image
                        src={item.thumbnail_url}
                        height='481px'
                        width='375px'
                    />
                    <StyledTextWrapper>
                        <StyledH2>{item.title}</StyledH2>
                        <StyledDescription>{item.description}</StyledDescription>
                        <StyledButtonWrapper>
                            <StyledMiniButton
                                isActive={activeButton === 'Характеристики'}
                                onClick={() => handleButtonClick('Характеристики')}
                            >
                                Характеристики
                            </StyledMiniButton>
                            <StyledMiniButton
                                isActive={activeButton === 'Активация и доставка'}
                                onClick={() => handleButtonClick('Активация и доставка')}
                            >
                                Активация и доставка
                            </StyledMiniButton>
                        </StyledButtonWrapper>
                        <StyledContentWrapper>
                            {renderContent()}
                        </StyledContentWrapper>
                        <StyledPrice>
                            {item.current_price}₽
                        </StyledPrice>
                        <StyledBuyButton onClick={scroll}>купить</StyledBuyButton>
                    </StyledTextWrapper>
                </StyledMainPage>
                <BuyPage/>
            </Container>
        </StyledGamePage>
    );
};

// Стили
const StyledGamePage = styled.div`
    margin-top: 140px;
`;

const StyledMainPage = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  img {
    object-fit: cover;
  }
`;

const StyledH2 = styled.h2`
  font-size: 40px;
  overflow-x: hidden;
  color: white;
  max-height: 100px;
  padding-top: 0;
  text-align: left;
  margin-bottom: 20px;
  
`;

const StyledDescription = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  height: 90px;
  overflow-x: scroll;
  line-height: 18px;
  text-align: left;
  color: #FFFFFF;
  margin-bottom: 20px;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  max-height: 490px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 40px;
`;

const StyledMiniButton = styled.div<{ isActive: boolean }>`
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
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
    background-color: ${({isActive}) => (isActive ? '#ffffff' : 'transparent')};
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
    text-align: left;
    height: 80px;
    font-weight: 900;
    overflow-x: scroll;
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
const StyledPrice = styled.div `
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #FFFFFF;
  text-align: left;
`
const StyledBuyButton = styled.button `
  width: 178px;
  height: 51px;
  background: red;
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
`
