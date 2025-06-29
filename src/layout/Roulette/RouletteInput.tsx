"use client";

import React, {useEffect, useState} from 'react';
import '../../components/input/InputFoundStyles.css';
import {SearchItem} from '../../common/api/searchItem/searchItem';
import {searchApi} from '../../common/api/searchItem/search-api';
import {generateItemPath} from '../../hooks/links';
import {useRouter} from "next/navigation";
import {catalogApi} from '../../common/api/catalogItem/catalog-api';
import Link from 'next/link';
import Image from 'next/image';

type RouletteInputProps = {
    selectHandlerAction: (game: SearchItem) => void;
    searchDefaultText?: string
}

export const RouletteInput = ({ selectHandlerAction, searchDefaultText } : RouletteInputProps) => {
    const router = useRouter();

    const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
    const [defaultItems, setDefaultItems] = useState<SearchItem[]>([]);
    useEffect(() => {
        const fetchDefaultItems = async () => {
            const data = await catalogApi.getItems(10001, {
                popular: true,
                isSteamGift: true,
            }, 5)
            let parsed = Array()
            data.forEach((v) => {
                parsed.push({
                    suggest_type: "item",
                    item_id: v.id,
                    item_category_id: v.category_id,
                    item_title: v.title,
                    item_current_price: v.current_price,
                    item_thumbnail_url: v.thumbnail_url,
                    item_type: "gift",
                    item_horizontal_image: v.horizontal_image_url,
                    item_genres: v.genres,
                    item_release_date: v.release_date,
                    probability: 1,
                })
            })
            setDefaultItems(parsed);
            setSearchResults(parsed)
        }
        fetchDefaultItems()
    }, []);

    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

    const [error, setError] = useState<string | null>(null);
    const [placeholder, setPlaceholder] = useState<string>(searchDefaultText ?? "Поиск по цифровым товарам")
    const onFocusHandler = () => {
        setIsPopupOpen(true);
        setPlaceholder("Цифровые товары")
    };

    const onBlurHandler = () => {
        setIsPopupOpen(false);
        setPlaceholder(searchDefaultText ?? "Поиск по цифровым товарам")
    };

    const [currentQuery, setCurrentQuery] = useState<string>("");
    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentQuery(e.target.value)
        if (e.target.value == "") {
            setSearchResults(defaultItems)
        } else {
            try {
                const data = await searchApi.suggest(e.target.value);
                setSearchResults(data);
            } catch (err) {
                setError('Произошла непредвиденная ошибка');
            }
        }
    };

    return (
        <div className={'inputContainer'} onBlur={onBlurHandler}
             style={{borderColor: isPopupOpen ? "rgb(128, 128, 128)" : "#ffffff61"}}>
            <div className={'customPlaceholder'}>
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
                    placeholder={placeholder}
                    onChange={changeHandler}
                    onFocus={onFocusHandler}
                    className='styledInput'
                />
                {isPopupOpen && (
                    <div className={'styledPopUp'}>
                        {searchResults?.length > 0 ? (
                            <ul className={'gameList'}>
                                {searchResults.map((game, index) => (
                                    <div key={index}>
                                        {game.suggest_type == "banner" && (
                                            <li className='searchBannerItem'
                                                onMouseDown={() =>
                                                    router.push(game.banner_url!)
                                                }
                                            >
                                                <div>
                                                    <img src={game.banner_image} width={209} height={98}
                                                         style={{borderRadius: '10px'}}></img>
                                                </div>
                                                <div style={{marginLeft: '25px'}}>
                                                    <p className={'searchBannerTitle'}>{game.banner_title || 'Без названия'}</p>
                                                    <p className='searchBannerDescription'>{game.banner_description}</p>
                                                </div>
                                            </li>
                                        )}
                                        {game.suggest_type == "item" && (
                                            <li
                                                className={'gameItem'}
                                                onMouseDown={() =>
                                                    selectHandlerAction(game)
                                                }
                                            >
                                                <div>
                                                    <img
                                                        src={game.item_horizontal_image}
                                                        width={209}
                                                        height={98}
                                                        style={{borderRadius: '10px'}}
                                                        alt={game.item_title}
                                                    />
                                                </div>
                                                <div style={{marginLeft: '25px'}}>
                                                    <p className={'styledGameName'}>{game.item_title || 'Без названия'}</p>
                                                    <p className={'styledPNewPrice'}>{game.item_current_price}</p>
                                                    <div className='SearchItemGenres'>
                                                        {game.item_genres?.slice(0, 2).map((v, idx) => (
                                                            <div key={idx} className='SearchItemGenre'>
                                                                {v}
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p className='SearchItemType'>Отправим {game.item_type == "gift" ? "подарком" : "ключом"}</p>
                                                </div>
                                            </li>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        ) : (
                            <div className='noResultsMessage'>{currentQuery}</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
