import '../../styles/Container.css'
import { ItemDetail } from "../../common/api/item-details/item-detail";
import { BuyPage } from "../../components/buyPage/BuyPage";
import './GamePageStyle.css'
import { BuyButton } from '../../components/buyButton/BuyButton';
import { GameFullInfo } from '../../components/gameFullInfo/GameFullInfo';
import Image from 'next/image';
import { GalleryItem } from '../../components/galleryItem/GalleryItem';

type GamePageProps = {
    item: ItemDetail;
};

const GamePage = ({ item }: GamePageProps) => {
    return (
        <div>
            <div className='StyledGamePageMainBackground' style={{backgroundImage: item.background_url ? `linear-gradient(to top, rgb(21, 23, 30) 5%, transparent 100%), url(${item.background_url})` : 'none'}}></div>
            <div className="container">
                <div className='StyledGamePageMainSection'>
                    {item.bx_image_url && (
                      <img
                        src={item.bx_image_url}
                        alt=''
                        width={300}
                        height={450}
                        className='StyledGamePageBxImage'
                      />
                    )}
                    {!item.bx_image_url && (
                      <img
                        src={item.thumbnail_url}
                        alt=''
                        width={350}
                        height={350}
                        className='StyledGamePageBxImage'
                      />
                    )}
                    <div className='StyledGamePageInfoContainer'>
                        {item.genres && (
                          <div className='StyledGamePageGenresContainer'>
                            {item.genres.map((genre, idx) => (
                              <div key={idx} className='StyledGamePageGenre'>
                                {genre}
                              </div>
                            ))}
                          </div>
                        )}
                        <h1 className='StyledGamePageGameTitle'>{item.title}</h1>
                        <p className='StyledGamePageGameDescription'>{item.description}</p>
                        {item.bx_gallery_urls && (
                          <div className='StyledGamePageGalleryContainer'>
                            {item.bx_gallery_urls.map((gallery_item, idx) => (
                              <div key={idx} className='StyledGamePageGalleryItem'>
                                <GalleryItem link={gallery_item}></GalleryItem>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className='StyledGamePageGamePrice'>
                            {item.current_price && <p className='StyledGamePageGameCurrentPrice'>{item.current_price}₽</p>}
                            {item.old_price && item.current_price && (
                                <>
                                    <p className='StyledGamePageGameOldPrice'>{item.old_price}</p>
                                    <span className='StyledGamePageGameDiscount'>
                                        {Math.round(((item.old_price - item.current_price) / item.old_price) * 100)}%
                                    </span>
                                </>
                            )}
                        </div>
                        <BuyButton></BuyButton>
                    </div>
                </div>
                <GameFullInfo item={item}></GameFullInfo>
                {item.yandex_market && (
                  <div className='StyledGamePageYandexMarketBanner'>
                    <Image src={"/YandexMarketBxItemLogo.png"} alt='YandexMarketLogo' width={266} height={51}></Image>
                    <p className='StyledGamePageYandexMarketBannerTitle'>Этот товар есть на Яндекс Маркете</p>
                    <p className='StyledGamePageYandexMarketBannerDescription'>Товар {item.title} представлен на Яндекс Маркете. Вы его можете найти на нашем профиле — <a className="StyledGamePageYandexMarketBannerLink" href="https://market.yandex.ru/store--godzilla-soft?businessId=139719541">GODZILLA SOFT</a>. Цена на сайте сильно ниже чем на платформе Яндекс Маркет, потому что у нашего магазина нет никаких дополнительных затрат за размещение наших товаров на сайте.</p>
                    <div className='StyledGamePageYandexMarketBannerInfo'>
                      <p className='StyledGamePageYandexMarketBannerPrice'>{item.yandex_market.price} ₽</p>
                      <p className='StyledGamePageYandexMarketBannerRating'>{item.yandex_market.rating}/5.0 ({item.yandex_market.reviews_count})</p>
                    </div>
                  </div>
                )}
                <BuyPage itemID={item.id} isSteamGift={item.type=="gift"}/>
            </div>
        </div>
    );
};

export default GamePage;

// const Background = styled.div<{ $backgroundUrl?: string; $hasBackground: boolean }>`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background-image: ${({ $backgroundUrl }) => ($backgroundUrl ? `url(${$backgroundUrl})` : 'none')};
//   background-size: cover;
//   background-position: center;
//   z-index: 0;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 2;
//     display: ${({ $hasBackground }) => ($hasBackground ? 'block' : 'none')};
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 0;
//     width: 100%;
//     height: 80px;
//     backdrop-filter: blur(2px);
//     z-index: 3;
//   }
// `;