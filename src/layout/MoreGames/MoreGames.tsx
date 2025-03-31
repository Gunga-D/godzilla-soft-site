import Link from 'next/link';
import { catalogApi } from '../../common/api/catalogItem/catalog-api';
import './MoreGamesStyle.css'
import { generateItemPath } from '../../hooks/links';

export const MoreGames = async () => {
    const data = await catalogApi.getItems(10001, {isSteamGift: true}, 20)

    return (
        <div className='MoreGames'>
            <h2 className='MoreGamesTitle'>Еще больше игр ❯</h2>
            <div className='MoreGamesContainer'>
                {data.map((item, index) => (
                    <Link href={generateItemPath(item.category_id, item.title, item.id)} key={index} style={{textDecoration: "none"}}>
                        <div className='MoreGamesItemContainer'>
                            <div className='MoreGamesItemThumbnailContainer'>
                                <img src={item.thumbnail_url} alt='ItemThumbnail' width={180} height={180} className='MoreGamesItemThumbnail'></img>
                            </div>
                            <div className='MoreGamesItemInfo'>
                                <h2 className='MoreGamesItemTitle'>{item.title}</h2>
                                <p className='MoreGamesItemRegion'>Регион акт: {item.region}</p>
                                <p className='MoreGamesItemPlatform'>Платформа: {item.platform}</p>
                            </div>
                            <div className='MoreGamesItemActions'>
                                <div className='MoreGamesItemPrice'>
                                    {item.current_price} ₽
                                </div>
                                <div className='MoreGamesItemBuy'>
                                    Купить
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
                <div className='MoreGamesLinkToCategory'>
                    <Link href={"/games"} style={{textDecoration: "none", color: "white"}}>Показать еще</Link>
                </div>
            </div>
        </div>
    );
};