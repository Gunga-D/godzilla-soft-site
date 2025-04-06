"use client"

import { BuyPage } from "../../components/buyPage/BuyPage"
import React, { useState } from 'react';
import "./RandomGamePageStyle.css"

export const RandomGamePage = () => {
    const [itemID, setItemID] = useState<number | null>(null);
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
            setItemID(44)
        }
        if (e.currentTarget.classList.contains("random-premium")) {
            setItemID(43)
        }
        if (e.currentTarget.classList.contains("random-default")) {
            setItemID(42)
        }
    }

    return (
        <div className="StyledRandomGamePage">
            <div className="StyledRandomGamePageContainer">
                <div className="StyledRandomGamePageContainerMainRandom">
                    <div className="StyledRandomGamePageCardsContainer">
                        <div className="StyledRandomGamePageCard">
                            <h2 className="StyledRandomGamePageCardTitle">Инди</h2>
                            <p className="StyledRandomGamePageCardDescription">
                                Обычная версия.<br/>Шанс выпадения приза - 1%.<br/>Игры до 2&nbsp;000₽.
                            </p>
                            <p className="StyledRandomGamePageCardPrice">208₽</p>
                            <button onClick={onClick} className="random-btn random-default StyledRandomGamePageCardBuyButton">Купить</button>
                        </div>
                        <div className="StyledRandomGamePageCard">
                            <h2 className="StyledRandomGamePageCardTitle">Премиум</h2>
                            <p className="StyledRandomGamePageCardDescription">Улучшенный пакет.<br/>Шанс выпадения приза - 4%.<br/>Игра до 5&nbsp;000₽.</p>
                            <p className="StyledRandomGamePageCardPrice">1557₽</p>
                            <button onClick={onClick} className="random-btn random-premium StyledRandomGamePageCardBuyButton">Купить</button>
                        </div>
                        <div className="StyledRandomGamePageCard">
                            <h2 className="StyledRandomGamePageCardTitle">18+ <span style={{backgroundColor: "#ffa31a", padding: "3px", color: "black"}}>Версия</span></h2>
                            <p className="StyledRandomGamePageCardDescription">Название данной версии говорит само за себя.</p>
                            <p className="StyledRandomGamePageCardPrice">63₽</p>
                            <button onClick={onClick} className="random-btn random-for-adults StyledRandomGamePageCardBuyButton">Купить</button>
                        </div>
                    </div>
                    <div className="StyledRandomGamePageInfoContainer">
                        <h2 className="StyledRandomGamePageInfoTitle">Зачем покупать случайную Steam игру?</h2>
                        <p className="StyledRandomGamePageInfoDesc">В первую очередь данный товар сделан для того, чтобы геймеры могли с легкостью и комфортом найти новый шедевр, который был недивидимый их глазу.</p>
                    </div>
                    <div className="StyledRandomGamePageInfoContainer">
                        <h2 className="StyledRandomGamePageInfoTitle">Как происходит сортировка игр?</h2>
                        <p className="StyledRandomGamePageInfoDesc">Сортировкой данного товара полностью занимается робот, в его характеристиках задан шаг и суммарная стоимость игр. Параметр шага влияет на то, через какое количество игр встретится дубликат, суммарная стоимость это общий бюджет на закупку игр. Балансируя данные параметры робот пытается сделать равноценное распределение по товару, так, чтобы вам не выпал дубликат и попалась действительно шедевральная игра, которая достойна вашего внимания.</p>
                    </div>
                    <BuyPage itemID={itemID||0} isSteamGift={false} title="Оформление заказа" description="Случайная игра Steam придет на следующий email:"></BuyPage>
                </div>
            </div>
        </div>
    )
}
