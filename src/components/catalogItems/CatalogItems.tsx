"use client";
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { catalogApi } from "../../common/api/catalogItem/catalog-api";
import { CatalogCard } from "../cardForGames/CatalogCard";
import { Item } from "../../common/api/item/item";
import { useStore } from "zustand/react";
import { FilterStore } from "../../common/store/FilterStatus/FilterStatus";
import { transliterate } from '../../hooks/transliterate';
import { useRouter } from "next/navigation";

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const [items, setItems] = useState<Item[]>([]);
    const [catalogName, setCatalogName] = useState<string>(props.active || 'games');
    const router = useRouter();
    const { min_price, max_price, region, platform } = useStore(FilterStore);

    const handleCardClick = (categoryID: number | undefined, itemName: string | undefined, itemId: number | undefined) => {
        let catalogPath = "";
        switch (categoryID) {
            case 10001:
                catalogPath = "games";
                break;
            case 10002:
                catalogPath = "subscriptions";
                break;
            case 10004:
                catalogPath = "deposits";
                break;
        }
        itemName = transliterate(itemName!);
        router.push(`/${catalogPath}/${itemName?.replaceAll(" ", "_")}_${itemId}`);
    };

    const loadItems = async () => {
        const filters = {
            min_price: min_price,
            max_price: max_price,
            platform: platform,
            region: region
        };

        try {
            let catalogID = "";
            switch (catalogName) {
                case "games":
                    catalogID = "10001";
                    break;
                case "subscriptions":
                    catalogID = "10002";
                    break;
                case "deposits":
                    catalogID = "10004";
                    break;
            }
            const data = await catalogApi.getItems(catalogID, filters);
            setItems(data);
        } catch (err) {
            console.error("Ошибка при загрузке данных:", err);
        }
    };

    useEffect(() => {
        if (props.active) {
            setCatalogName(props.active);
        }
    }, [props.active]);

    useEffect(() => {
        loadItems();
    }, [catalogName, region, platform, max_price, min_price]);

    return (
        <StyledDiv>
            <StyledButtons>
                <StyledButton
                    onClick={() => {
                        if (catalogName === 'games') return;
                        setCatalogName('games');
                        setItems([]);
                    }}
                    data-is-active={catalogName === 'games'}
                >
                    Игры
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        if (catalogName === 'deposits') return;
                        setCatalogName('deposits');
                        setItems([]);
                    }}
                    data-is-active={catalogName === 'deposits'}
                >
                    Пополнение
                </StyledButton>
                <StyledButton
                    onClick={() => {
                        if (catalogName === 'subscriptions') return;
                        setCatalogName('subscriptions');
                        setItems([]);
                    }}
                    data-is-active={catalogName === 'subscriptions'}
                >
                    Подписки
                </StyledButton>
            </StyledButtons>
            <StyledCatalog>
                {items.map((game, index) => (
                    <CatalogCard
                        key={index}
                        cursor={true}
                        height={325}
                        width={253}
                        cardType="catalogCard"
                        nameGame={game.title}
                        imageUrl={game.thumbnail_url}
                        onClick={() => handleCardClick(game.category_id, game.title, game.id)}
                        transform={true}
                        oldPrice={game.old_price}
                        newPrice={game.current_price}
                        is_for_sale={game.is_for_sale}
                        region={game.region}
                        platform={game.platform}
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
  font-family: Helvetica;
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

const StyledButton = styled.div<{ 'data-is-active': boolean }>`
  width: 253px;
  height: 45px;
  border: 2px solid #FF333B;
  border-radius: 5px;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  background-color: ${({ 'data-is-active': isActive }) => (isActive ? '#FF333B' : 'transparent')};
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
