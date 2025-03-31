"use client";
import React, { useState } from 'react';
import './InputFoundStyles.css';
import { SearchItem } from '../../common/api/searchItem/searchItem';
import { searchApi } from '../../common/api/searchItem/search-api';
import { generateItemPath } from '../../hooks/links';
import Image from 'next/image';
import {router} from "next/client";
import {useRouter} from "next/navigation";

export const InputFound = () => {
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const onFocusHandler = () => {
        setIsPopupOpen(true);
    };

    const onBlurHandler = () => {
        setIsPopupOpen(false);
    };

    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);
        try {
            const data = await searchApi.suggest(e.target.value);
            setSearchResults(data);
        } catch (err) {
            setError('Произошла непредвиденная ошибка');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCardClick = (categoryID: number, itemName: string, itemId: number) => {
        router.push(generateItemPath(categoryID, itemName, itemId));    
    };

    return (
        <div className={'inputContainer'}>
            <div className={'customPlaceholder'} onBlur={onBlurHandler}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 10.8863 15.2539 12.5984 14.0406 13.8572C14.0068 13.8833 13.9743 13.9118 13.9433 13.9428C13.9123 13.9738 13.8837 14.0064 13.8576 14.0402C12.5988 15.2537 10.8866 16 9 16C5.13401 16 2 12.866 2 9ZM14.618 16.0317C13.0782 17.2634 11.1251 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 11.1249 17.2636 13.0778 16.0321 14.6174L19.7075 18.2928C20.098 18.6833 20.098 19.3165 19.7075 19.707C19.317 20.0975 18.6838 20.0975 18.2933 19.707L14.618 16.0317Z"
                        fill="white"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Найти"
                    onChange={changeHandler}
                    onFocus={onFocusHandler}
                    className={'styledInput'}
                />

                {isPopupOpen && (
                    <div className={'styledPopUp'}>
                        {isLoading ? (
                            <div className={'loadingMessage'}>Загрузка...</div>
                        ) : error ? (
                            <div className={'errorMessage'}>{error}</div>
                        ) : searchResults?.length > 0 ? (
                            <ul className={'gameList'}>
                                {searchResults.map((game, index) => (
                                    <li
                                        className={'gameItem'}
                                        onMouseDown={() =>
                                            handleCardClick(game.item_category_id, game.item_title, game.item_id)
                                        }
                                        key={index}
                                    >
                                        <div>
                                            <img
                                                src={game.item_thumbnail_url}
                                                width={100}
                                                height={100}
                                                style={{ borderRadius: '10px' }}
                                                alt={game.item_title}
                                            />
                                        </div>
                                        <div style={{ marginLeft: '25px' }}>
                                            <p className={'styledGameName'}>{game.item_title || 'Без названия'}</p>
                                            <br />
                                            <p className={'styledPNewPrice'}>{game.item_current_price}</p>
                                            {game.item_is_for_sale && (
                                                <p className={'styledPOldPrice'}>{game.item_old_price}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className='noResultsMessage'>Результатов не найдено</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
