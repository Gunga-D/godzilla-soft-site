"use client"

import Link from 'next/link';
import { catalogApi } from '../../common/api/catalogItem/catalog-api';
import './MoreGamesStyle.css'
import { generateItemPath } from '../../hooks/links';
import { useEffect, useState } from 'react';
import { CatalogItem } from '../../common/api/catalogItem/catalogItem';
import { useSearchParams } from 'next/navigation'
import { addUTM } from '../../hooks/utm';

export const MoreGames = () => {
    const [data, setData] = useState<CatalogItem[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const resp = await catalogApi.getItems(10001, {isSteamGift: true}, 20, 0, true)
            setData([...resp])
            setLoading(false)
        }
        fetchData()
    }, [])

    let linkQuery: { [key: string]: string } = { type: "gift", category: "popular" }
    const searchParams = useSearchParams()
    const utm_source = searchParams.get('utm_source')
    if (utm_source) {
        linkQuery["utm_source"] = utm_source
    }

    return (
        <div className='MoreGames'>
            <h2 className='MoreGamesTitle'>Еще больше игр ❯</h2>
            <div className='MoreGamesContainer'>
                {loading && (
                    <p style={{fontSize: "32px", fontWeight: "900", color: "white"}}>Загрузка...</p>
                )}

                {data.map((item, index) => (
                    <a target="_blank" rel="noopener noreferrer" href={addUTM(generateItemPath(item.category_id, item.title, item.id), utm_source)} key={index} style={{textDecoration: "none"}}>
                        <div className='MoreGamesItemContainer'>
                            <div className='MoreGamesItemThumbnailContainer'>
                                <img src={item.horizontal_image_url} alt='ItemThumbnail' width={306} height={143} className='MoreGamesItemThumbnail'></img>
                            </div>
                            <div className='MoreGamesItemInfo'>
                                <h2 className='MoreGamesItemTitle'>{item.title}</h2>
                                <div className="MoreGamesItemBadgeBar">
                                    {item.genres?.slice(0, 4).map((badge, badgeIdx) => (
                                        <div className="MoreGamesItemBadge" key={badgeIdx}>
                                            {badge}
                                        </div>
                                    ))}
                                </div>
                                {item.release_date && (
                                    <p className="MoreGamesItemReleaseDate">
                                        Дата выхода: {item.release_date}
                                    </p>
                                )}
                            </div>
                            <div className='MoreGamesItemActions'>
                                <div className='MoreGamesItemPrice'>
                                    {item.current_price} ₽
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
                <Link href={{pathname: "/games", query: linkQuery}} style={{textDecoration: "none", color: "white"}} className='MoreGamesLinkToCategory'>Показать еще</Link>
            </div>
        </div>
    );
};