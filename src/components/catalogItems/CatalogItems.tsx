"use client";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { catalogApi } from "../../common/api/catalogItem/catalog-api";
import { CatalogCard } from "../cardForGames/CatalogCard";
import { Item } from "../../common/api/item/item";
import { useStore } from "zustand/react";
import { FilterStore } from "../../common/store/FilterStatus/FilterStatus";
import { generateItemPath } from '../../hooks/links';
import { useRouter, useSearchParams } from "next/navigation";
import './CatalogItemsStyle.css';

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const searchParams = useSearchParams()

    const [items, setItems] = useState<Item[]>([]);
    const [catalogName, setCatalogName] = useState<string>(props.active || 'games');
    const [subCatalogName, setSubCatalogName] = useState<string>(searchParams.get("subcatalog") || "gift")
    const router = useRouter();
    const { min_price, max_price, region, platform } = useStore(FilterStore);
    const [page, setPage] = useState<number>(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleCardClick = (categoryID: number, itemName: string, itemId: number) => {
        router.push(generateItemPath(categoryID, itemName, itemId));
    };

    const changeCatalog = (catalog: string) => {
        setPage(0)
        setCatalogName(catalog)
        setHasMore(true)
        setItems([])
    }
    const changeSubcatalog = (subcatalog: string) => {
        setPage(0)
        setSubCatalogName(subcatalog)
        setHasMore(true)
        setItems([])
    }

    const loadItems = async () => {
        let isSteamGift = false
        if (subCatalogName == "gift" && catalogName == "games") {
            isSteamGift = true
        }
        const filters = {
            min_price: min_price,
            max_price: max_price,
            platform: platform,
            region: region,
            isSteamGift: isSteamGift
        };

        setLoading(true);
        try {
            let catalogID = 0;
            switch (catalogName) {
                case "games":
                    catalogID = 10001;
                    break;
                case "subscriptions":
                    catalogID = 10002;
                    break;
                case "deposits":
                    catalogID = 10004;
                    break;
            }
            const data = await catalogApi.getItems(catalogID, filters, 20, page * 20);
            if (data.length === 0) {
                setHasMore(false);
              } else {
                setItems([...items, ...data]);
                setPage(page+1);
            }
        } catch (err) {
            console.error("Ошибка при загрузке данных:", err);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (props.active) {
            setCatalogName(props.active);
        }
    }, [props.active]);

    useEffect(() => {
        loadItems();
    }, [catalogName, region, platform, max_price, min_price, subCatalogName]);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastItemRef = useCallback(
        (node: HTMLElement | null) => {
          if (loading) return;
          if (observer.current) observer.current.disconnect();
    
          observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
              loadItems();
            }
          });
    
          if (node) observer.current.observe(node);
        },
        [loading, hasMore, loadItems]
      );

    return (
        <div className="catalog-container">
            <div className="catalog-buttons">
                <div className="main-buttons">
                    <button
                        className={`catalog-button ${catalogName === 'games' ? 'active' : ''}`}
                        onClick={() => changeCatalog('games')}
                    >
                        Игры
                    </button>
                    <button
                        className={`catalog-button ${catalogName === 'deposits' ? 'active' : ''}`}
                        onClick={() => changeCatalog('deposits')}
                    >
                        Пополнение
                    </button>
                    <button
                        className={`catalog-button ${catalogName === 'subscriptions' ? 'active' : ''}`}
                        onClick={() => changeCatalog('subscriptions')}
                    >
                        Подписки
                    </button>
                </div>
                {catalogName === 'games' && (
                    <div className="game-sub-buttons">
                        <button
                            className={`subcatalog-button ${subCatalogName === 'gift' ? 'active' : ''}`}
                            onClick={() => changeSubcatalog("gift")}
                        >
                            Гифты
                        </button>
                        <button
                            className={`subcatalog-button ${subCatalogName === 'key' ? 'active' : ''}`}
                            onClick={() => changeSubcatalog('key')}
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
                <div 
                    ref={lastItemRef}
                    style={{ width: "100%", height: "100px"}}
                ></div>
            </div>
        </div>
    );
};
