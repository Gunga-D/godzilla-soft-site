import React, { useEffect, useState } from 'react';
import { itemDetailsApi } from '../../common/api/item-details/item-details-api';
import { useLocation, useParams } from 'react-router-dom';
import { ItemDetail } from '../../common/api/item-details/item-detail';
import { Container } from '../../styles/Container';
import { Image } from '../../components/image/Image';
import styled from 'styled-components';
import { BuyPage } from '../../components/buyPage/BuyPage';
import { Link } from 'react-router-dom';
import {Skeleton} from "../../components/skeleton/Skeleton";

export const GamePage = () => {
    const [item, setItem] = useState<ItemDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
    const { id } = useParams();
    const [activeButton, setActiveButton] = useState<string>('Характеристики');
    const location = useLocation();

    const scroll = () => {
        const element = document.getElementById('dostavka');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const fetchItem = async () => {
            setIsLoading(true);
            try {
                const data = await itemDetailsApi.getItem(`${id}`);
                setItem(data);
            } catch (err) {
                console.error('Ошибка при загрузке данных:', err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchItem();
    }, [location.key]);

    if (isLoading) {
        return (
            <StyledGamePage>
                <Container>
                    <Skeleton />
                </Container>
            </StyledGamePage>
        );
    }

    if (!item) {
        return (
            <NotFoundGame>
                <StyledSubtitle>К сожалению, данный товар закончился</StyledSubtitle>
                <StyledText>Но он скоро появится! </StyledText>
                <StyledLink to={'/catalog/category/10001'}>
                    <StyledReturn>Вернуться на главную</StyledReturn>
                </StyledLink>
            </NotFoundGame>
        );
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
                            {item.creator && <li>Разработчик: {item.creator}</li>}
                            {item.publisher && <li>Издатель: {item.publisher}</li>}
                        </ul>
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
        <StyledGamePage>
            <Container>
                <StyledMainPage>
                    <Image src={item.thumbnail_url} height="481px" width="375px" />
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
                        <StyledContentWrapper>{renderContent()}</StyledContentWrapper>
                        <StyledPrice>
                            {item.current_price && <StyledPNewPrice>{item.current_price}₽</StyledPNewPrice>}
                            {item.old_price&&item.current_price && (
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
                <BuyPage />
            </Container>
        </StyledGamePage>
    );
};

const StyledGamePage = styled.div`
  margin-top: 140px;
  max-width: 1200px;
  margin-left: 0;
  padding-left: 0;
`;

const StyledMainPage = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  img {
    object-fit: cover;
    width: 375px;
    height: 481px;
    width: 100%;
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

const StyledMiniButton = styled.div<{ isActive: boolean }>`
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
    background-color: ${({ isActive }) => (isActive ? '#ffffff' : 'transparent')};
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
  text-decoration: line-through; // Зачеркивание текста

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
