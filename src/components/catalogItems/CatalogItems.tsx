import React, { useEffect, useState, useCallback } from 'react';
import styled from "styled-components";
import { catalogApi } from "../../common/api/catalogItem/catalog-api";
import { CatalogCard } from "../cardForGames/CatalogCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Item } from "../../common/api/item/item";
import { Link } from "react-router-dom";
import { useStore } from "zustand/react";
import { FilterStore } from "../../common/store/FilterStatus/FilterStatus";

type CatalogProps = {
    active?: string,
}

export const CatalogItems = (props: CatalogProps) => {
    const [items, setItems] = useState<Item[]>([]);
    const [activeItem, setActiveItem] = useState<any>(props.active || '10001');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const { id } = useParams();
    const { min_price, max_price, region, platform } = useStore(FilterStore);

    const handleCardClick = (id: number | undefined) => {
        navigate(`/catalog/${id}`);
    };

    const loadMoreItems = useCallback(async () => {
        if (!hasMore) return;

        const filters = {
            min_price: min_price,
            max_price: max_price,
            platform: platform,
            region: region
        };

        try {
            const data = await catalogApi.getItems(id || activeItem, filters);
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setItems(prevItems => [...prevItems, ...data]);
                setPage(prevPage => prevPage + 1);
            }
        } catch (err) {
            console.error("Ошибка при загрузке данных:", err);
        }
    }, [id, activeItem, min_price, max_price, platform, region, hasMore]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || !hasMore) {
                return;
            }
            loadMoreItems();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreItems, hasMore]);

    useEffect(() => {
        setItems([]); // Очистка старых данных при изменении фильтров
        setPage(1);
        setHasMore(true);
        loadMoreItems();
    }, [location, region, platform, max_price, min_price, id, activeItem]);

    return (
        <StyledDiv>
            <StyledButtons>
                <StyledLink to={'/catalog/category/10001'}>
                    <StyledButton
                        onClick={() => setActiveItem('10001')}
                        isActive={activeItem === '10001'}
                    >
                        Игры
                    </StyledButton>
                </StyledLink>
                <StyledLink to={'/catalog/category/10004'}>
                    <StyledButton
                        onClick={() => setActiveItem('10004')}
                        isActive={activeItem === '10004'}
                    >
                        Пополнение
                    </StyledButton>
                </StyledLink>
                <StyledLink to={'/catalog/category/10002'}>
                    <StyledButton
                        onClick={() => setActiveItem('10002')}
                        isActive={activeItem === '10002'}
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
                    />
                ))}
            </StyledCatalog>
            {!hasMore && <div>No more items to load</div>}
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
