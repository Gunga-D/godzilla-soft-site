"use client";
import React, { useEffect, useState } from 'react';
import { catalogApi } from "../../common/api/catalogItem/catalog-api";
import { CatalogCard } from "../cardForGames/CatalogCard";
import { Item } from "../../common/api/item/item";
import { useStore } from "zustand/react";
import { FilterStore } from "../../common/store/FilterStatus/FilterStatus";
import { generateItemPath } from '../../hooks/links';
import { useRouter } from "next/navigation";
import './CatalogItemsStyle.css';

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const [items, setItems] = useState<Item[]>([]);
    const [catalogName, setCatalogName] = useState<string>(props.active || 'games');
    const router = useRouter();
    const { min_price, max_price, region, platform } = useStore(FilterStore);

    const handleCardClick = (categoryID: number, itemName: string, itemId: number) => {
        router.push(generateItemPath(categoryID, itemName, itemId));
    };

    const loadItems = async () => {
        const filters = {
            min_price: min_price,
            max_price: max_price,
            platform: platform,
            region: region
        };

        try {
            let catalogID = 0;
            switch (catalogName) {
                case "games":
                case "gifts":
                case "codes":
                    catalogID = 10001;
                    break;
                case "subscriptions":
                    catalogID = 10002;
                    break;
                case "deposits":
                    catalogID = 10004;
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
        <div className="catalog-container">
            <div className="catalog-buttons">
                <div className="main-buttons">
                    <button
                        className={`catalog-button ${catalogName === 'games' ? 'active' : ''}`}
                        onClick={() => setCatalogName('games')}
                    >
                        Игры
                    </button>
                    <button
                        className={`catalog-button ${catalogName === 'deposits' ? 'active' : ''}`}
                        onClick={() => setCatalogName('deposits')}
                    >
                        Пополнение
                    </button>
                    <button
                        className={`catalog-button ${catalogName === 'subscriptions' ? 'active' : ''}`}
                        onClick={() => setCatalogName('subscriptions')}
                    >
                        Подписки
                    </button>
                </div>
                {catalogName === 'games' && (
                    <div className="game-sub-buttons">
                        <button
                            className={`catalog-button ${catalogName === 'gifts' ? 'active' : ''}`}
                            onClick={() => setCatalogName('gifts')}
                        >
                            Гифты
                        </button>
                        <button
                            className={`catalog-button ${catalogName === 'codes' ? 'active' : ''}`}
                            onClick={() => setCatalogName('codes')}
                        >
                            Коды
                        </button>
                    </div>
                )}
            </div>
            <div className="catalog-grid">
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
            </div>
        </div>
    );
};
