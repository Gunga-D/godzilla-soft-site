import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {catalogApi} from "../../common/api/catalogItem/catalog-api";
import {CatalogItem} from "../../common/api/catalogItem/catalogItem";
import {CatalogCard} from "../cardForGames/CatalogCard";
import {useLocation, useNavigate} from "react-router-dom";
import {Item} from "../../common/api/item/item";

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const [item, setItem] = useState<Item[] | null>(null);
    const [activeItem, setActiveItem] = useState(props.active || '10001');
    const location = useLocation();
    const navigate = useNavigate();

    const handleCardClick = (id: number | undefined) => {
        navigate(`/catalog/${id}`);
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await catalogApi.getItems(activeItem);
                setItem(data);
                setActiveItem(activeItem)

            } catch (err) {

            }
        };
        fetchItem();
    }, [activeItem, location]);
    return (
        <StyledDiv>
            <StyledButtons>
                <StyledButton
                    onClick={() => setActiveItem('10001')}
                    isActive={activeItem === '10001'}
                >
                    Игры
                </StyledButton>
                <StyledButton
                    onClick={() => setActiveItem('10004')}
                    isActive={activeItem === '10004'}
                >
                    Пополнение
                </StyledButton>
                <StyledButton
                    onClick={() => setActiveItem('10002')}
                    isActive={activeItem === '10002'}
                >
                    Подписки
                </StyledButton>
            </StyledButtons>
            <StyledCatalog>
                {item?.map((game, index) => (
                    <CatalogCard
                        key={index}
                        cursor={true}
                        height="325px"
                        width="253px"
                        cardType="catalogCard"
                        nameGame={game.title}
                        imageUrl = {game.thumbnail_url}
                        onClick={() => handleCardClick(game.id)}
                        transform={true}
                    />
                ))}
            </StyledCatalog>
        </StyledDiv>
    );
};

const StyledDiv = styled.div `
    display: flex;
  flex-direction: column;
  gap: 15px;
`
const StyledButtons = styled.div `
  display: flex;
  gap: 20px;
`
const StyledCatalog = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(239px, 1fr));
  gap: 20px;
  width: 100%;
  justify-content: center;
`;

const StyledButton = styled.div<{ isActive: boolean }>`
    width: 253px;
    height: 45px;
    border: 2px solid #FF333B;
    border-radius: 5px;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    background-color: ${({ isActive }) => (isActive ? '#FF333B' : 'transparent')};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: #FF333B;
        color: #FFFFFF;
    }
`;
