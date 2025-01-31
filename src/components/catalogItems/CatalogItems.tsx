import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {catalogApi} from "../../common/api/catalogItem/catalog-api";
import {CatalogItem} from "../../common/api/catalogItem/catalogItem";
import {CatalogCard} from "../cardForGames/CatalogCard";
import {useLocation, useNavigate} from "react-router-dom";

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const [item, setItem] = useState<CatalogItem[] | null>(null);
    const [activeItem, setActiveItem] = useState(props.active || '1');
    const location = useLocation();
    const navigate = useNavigate();

    const handleCardClick = (id: string | undefined) => {
        navigate(`/catalog/${id}`);
    };

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await catalogApi.getItem(activeItem);
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
                    onClick={() => setActiveItem('0')}
                    isActive={activeItem === '0'}
                >
                    Игры
                </StyledButton>
                <StyledButton
                    onClick={() => setActiveItem('2')}
                    isActive={activeItem === '2'}
                >
                    Пополнение
                </StyledButton>
                <StyledButton
                    onClick={() => setActiveItem('1')}
                    isActive={activeItem === '1'}
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
                        nameGame={game.name}
                        onClick={() => handleCardClick(game.id)}
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
