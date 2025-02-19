import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { catalogApi } from "../../common/api/catalogItem/catalog-api";
import { CatalogCard } from "../cardForGames/CatalogCard";
import {  useNavigate, useParams } from "react-router-dom";
import { Item } from "../../common/api/item/item";
import { Link } from "react-router-dom";
import { useStore } from "zustand/react";
import { FilterStore } from "../../common/store/FilterStatus/FilterStatus";

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const [items, setItems] = useState<Item[]>([]);
    const navigate = useNavigate();
    const { value } = useParams();
    const [catalogName, setCatalogName] = useState<any>(value || props.active || 'games');

    const { min_price, max_price, region, platform } = useStore(FilterStore);

    const handleCardClick = (id: number | undefined) => {
        navigate(`/catalog/${id}`);
    };

    const loadItems = async () => {
        const filters = {
            min_price: min_price,
            max_price: max_price,
            platform: platform,
            region: region
        };

        try {
            let catalogID = ""
            switch (catalogName) {
                case "games":
                    catalogID = "10001"
                    break
                case "subscriptions":
                    catalogID = "10002"
                    break
                case "deposits":
                    catalogID = "10004"
                    break
            }
            const data = await catalogApi.getItems(catalogID, filters); // Используем activeItem
            setItems(data);
        } catch (err) {
            console.error("Ошибка при загрузке данных:", err);
        }
    };

    useEffect(() => {
        if (value) {
            setCatalogName(value);
        }
    }, [value]);

    useEffect(() => {
        loadItems();
    }, [catalogName, region, platform, max_price, min_price]);

    return (
        <StyledDiv>
            <StyledButtons>
                <StyledLink to={'/catalog/category/games'}>
                    <StyledButton
                        onClick={() => {
                            setCatalogName('games');
                            setItems([]);

                        }
                    }
                        isActive={catalogName === 'games'}
                    >
                        Игры
                    </StyledButton>
                </StyledLink>
                <StyledLink to={'/catalog/category/deposits'}>
                    <StyledButton
                        onClick={() => {
                            setCatalogName('deposits');
                            setItems([]);
                        }
                    }
                        isActive={catalogName === 'deposits'}
                    >
                        Пополнение
                    </StyledButton>
                </StyledLink>
                <StyledLink to={'/catalog/category/subscriptions'}>
                    <StyledButton
                        onClick={() => {setCatalogName('subscriptions');
                            setItems([]);
                        }}
                        isActive={catalogName === 'subscriptions'}
                    >
                        Подписки
                    </StyledButton>
                </StyledLink>
            </StyledButtons>
            <StyledCatalog>
                {items.map((game, index) => (
                    <CatalogCard
                        key={index}
                        cursor={true}
                        height="325px"
                        width="253px"
                        cardType="catalogCard"
                        nameGame={game.title}
                        imageUrl={game.thumbnail_url}
                        onClick={() => handleCardClick(game.id)}
                        transform={true}
                        oldPrice={game.old_price}
                        newPrice={game.current_price}
                        is_for_sale={game.is_for_sale}
                        region = {game.region}
                        platform = {game.platform}
                    />
                ))}
            </StyledCatalog>
        </StyledDiv>
    );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 20px;
`;

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;
