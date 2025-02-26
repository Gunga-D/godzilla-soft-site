import { BuyPage } from "../../components/buyPage/BuyPage"
import { Container } from "../../styles/Container"
import styled from "styled-components"
import React, { useState } from 'react';
import image from "../../assets/images/Banners/RandomBanner.png"

export const RandomGamePage = () => {
    const [itemID, setItemID] = useState<string | undefined>(undefined);
    const scroll = () => {
        const element = document.getElementById('dostavka');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    const onClick = (e: React.MouseEvent<HTMLElement>) => {
        scroll()
        let btns = document.getElementsByClassName("random-btn") as HTMLCollectionOf<HTMLElement>;
        for (let i=0;i<btns.length;i++){
            btns[i].textContent = "Купить"
            btns[i].style.color = "white"
            btns[i].style.backgroundColor = "red"   
        }

        e.currentTarget.style.color = "red"
        e.currentTarget.style.backgroundColor = "black" 
        e.currentTarget.textContent = "Выбрано"

        if (e.currentTarget.classList.contains("random-for-adults")) {
            setItemID("44")
            console.log("for adults")
        }
        if (e.currentTarget.classList.contains("random-premium")) {
            setItemID("43")
            console.log("premium")
        }
        if (e.currentTarget.classList.contains("random-default")) {
            setItemID("42")
            console.log("default")
        }
    }

    return (
        <StyledRandomGamePage>
            <Container>
                <StyledMainRandom>
                    <StyledBanner src={image}></StyledBanner>
                    <StyledCardsContainer>
                        <StyledCard>
                            <StyledCardName>Инди</StyledCardName>
                            <StyledCardDescription>
                                Обычная версия.<br/>Шанс выпадения приза - 1%.<br/>Игры до 2&nbsp;000₽.
                                {/* <li><a href="https://godzillasoft.ru/games/HellDivers_2_1">HellDivers 2</a></li>
                                <li><a href="https://godzillasoft.ru/games/Metro_Exodus_31">Metro Exodus</a></li>
                                <li><a href="https://godzillasoft.ru/games/Mortal_Kombat_11_3">Mortal Kombat 11</a></li>
                                <li><a href="https://godzillasoft.ru/games/God_of_War_25">God of war</a></li>
                                <li><a href="https://godzillasoft.ru/games/Ghost_of_Tsushima_Director's_Cut_33">Ghost of Thushima</a></li>
                                <li><a href="https://godzillasoft.ru/games/Doom_Eternal_36">Doom Eternal</a></li>
                                <li><a href="https://godzillasoft.ru/games/Frostpunk_2_11">Frost punk 2</a></li>
                                <li><a href="https://godzillasoft.ru/games/Dark_Souls_3_5">Dark souls 3</a></li>
                                <li><a href="https://godzillasoft.ru/games/Dragon's_Dogma_2_37">Dragon's Dogma 2</a></li> */}
                            </StyledCardDescription>
                            <StyledPrice>208₽</StyledPrice>
                            <StyledBuyButton onClick={onClick} className="random-btn random-default">Купить</StyledBuyButton>
                        </StyledCard>
                        <StyledCard>
                            <StyledCardName>Премиум</StyledCardName>
                            <StyledCardDescription>Улучшенный пакет.<br/>Шанс выпадения приза - 4%.<br/>Игра до 5&nbsp;000₽.</StyledCardDescription>
                            <StyledPrice>1557₽</StyledPrice>
                            <StyledBuyButton onClick={onClick} className="random-btn random-premium">Купить</StyledBuyButton>
                        </StyledCard>
                        <StyledCard>
                            <StyledCardName>18+ <span style={{backgroundColor: "#ffa31a", padding: "3px", color: "black"}}>Версия</span></StyledCardName>
                            <StyledCardDescription>Название данной версии говорит само за себя.</StyledCardDescription>
                            <StyledPrice>63₽</StyledPrice>
                            <StyledBuyButton onClick={onClick} className="random-btn random-for-adults">Купить</StyledBuyButton>
                        </StyledCard>
                    </StyledCardsContainer>
                    <StyledInfo>
                        <StyledInfoTitle>Зачем покупать случайную Steam игру?</StyledInfoTitle>
                        <StyledInfoDescription>В первую очередь данный товар сделан для того, чтобы геймеры могли с легкостью и комфортом найти новый шедевр, который был недивидимый их глазу.</StyledInfoDescription>
                    </StyledInfo>
                    <StyledInfo>
                        <StyledInfoTitle>Как происходит сортировка игр?</StyledInfoTitle>
                        <StyledInfoDescription>Сортировкой данного товара полностью занимается робот, в его характеристиках задан шаг и суммарная стоимость игр. Параметр шага влияет на то, через какое количество игр встретится дубликат, суммарная стоимость это общий бюджет на закупку игр. Балансируя данные параметры робот пытается сделать равноценное распределение по товару, так, чтобы вам не выпал дубликат и попалась действительно шедевральная игра, которая достойна вашего внимания.</StyledInfoDescription>
                    </StyledInfo>
                    <BuyPage itemID={itemID} title="Оформление заказа" description="Случайная игра Steam придет на следующий email:"></BuyPage>
                </StyledMainRandom>
            </Container>
        </StyledRandomGamePage>
    )
}

const StyledRandomGamePage = styled.div`
    width: 100vw;
`

const StyledMainRandom = styled.div`
    color: white;
    padding: 20px;
    width: 100%;
    margin-top: 100px;
    z-index: 1;
`

const StyledBanner = styled.img`
    margin-bottom: 50px;
    width: 100%;
    border-radius: 15px;
`

const StyledH1 = styled.h1`
    font-style: normal;
    font-weight: 900;
    font-size: 51px;
    line-height: 150%;
    color: #FFFFFF;
    margin-bottom: 50px;
`

const StyledCardsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const StyledCard = styled.div`
    padding: 30px;
    width: 30%;
    background-color: black;
    border-radius: 30px;
    margin-bottom: 50px;
`

const StyledCardName = styled.h2`
    font-size: 33px;
    line-height: 150%;
`

const StyledCardDescription = styled.p`
    padding-left: 10px;
    text-align: left;
    min-height: 80px;
    height: 33px;
    font-weight: 600;
    overflow-x: auto;
    font-size: 16px;
`

const StyledPrice = styled.p`
  font-style: normal;
  font-weight: 900;
  font-size: 51px;
  line-height: 150%;
  color: #ffffff;
`

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

const StyledInfo = styled.div`
    text-align: left;
    width: 95%;
    margin-top: 50px;
`

const StyledInfoTitle = styled.h2`
    font-weight: 800;
    font-size: 32px;
`
const StyledInfoDescription = styled.p`
    font-size: 18px;
`