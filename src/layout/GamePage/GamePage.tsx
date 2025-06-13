import '../../styles/Container.css'
import { ItemDetail } from "../../common/api/item-details/item-detail";
import { BuyPage } from "../../components/buyPage/BuyPage";
import './GamePageStyle.css'
import { BuyButton } from '../../components/buyButton/BuyButton';
import { GameFullInfo } from '../../components/gameFullInfo/GameFullInfo';
import Image from 'next/image';
import { GalleryItem } from '../../components/galleryItem/GalleryItem';
import Link from 'next/link';
import { generateItemPath } from '../../hooks/links';
import { OnSideCarouselController } from '../../components/onSideCarouselController/OnSideCarouselController';
import { GalleryMovieItem } from '../../components/galleryMovieItem/GalleryMovieItem';
import { GameReviews } from '../../components/gameReviews/GameReviews';

type GamePageProps = {
    item: ItemDetail;
};

const GamePage = ({ item }: GamePageProps) => {
    let categoryBreadcrumbName = "Неизвестно"
    let categoryBreadcrumbLink = "/"
    switch (item.category_id) {
      case 10001:
        categoryBreadcrumbName = "Игры"
        categoryBreadcrumbLink = "/games?type=gift&category=popular"
        break
      case 10002:
        categoryBreadcrumbName = "Подписки"
        categoryBreadcrumbLink = "/subscriptions"
        break
      case 10004:
        categoryBreadcrumbName = "Пополнения"
        categoryBreadcrumbLink = "/deposits"
        break
    }

    return (
        <div>
            <div className='StyledGamePageMainBackground' style={{backgroundImage: item.background_url ? `linear-gradient(to top, rgb(21, 23, 30) 5%, transparent 100%), url(${item.background_url})` : 'none'}}></div>
            <div className="container">
                <div className='StyledGamePageMainSection'>
                    <div className='StyledGamePageBreadcrumbs' itemScope itemType="http://schema.org/BreadcrumbList">
                      <Link href={"/"} className='StyledGamePageBreadcrumb' itemScope itemType="http://schema.org/ListItem">Главная</Link>
                      <span className='StyledGamePageBreadcrumbDelimeter'>›</span>
                      <Link href={categoryBreadcrumbLink} className='StyledGamePageBreadcrumb' itemScope itemType="http://schema.org/ListItem">{categoryBreadcrumbName}</Link>
                      <span className='StyledGamePageBreadcrumbDelimeter'>›</span>
                      <Link href={generateItemPath(item.category_id, item.title, item.id)} className='StyledGamePageBreadcrumb' itemScope itemType="http://schema.org/ListItem">{item.title}</Link>
                    </div>
                    {item.bx_image_url && (
                      <div style={{position: "relative"}}>
                        <img
                          src={item.bx_image_url}
                          alt=''
                          width={300}
                          height={450}
                          className='StyledGamePageBxImage'
                        />
                      </div>
                    )}
                    {!item.bx_image_url && (
                      <div style={{position: "relative"}}>
                        <img
                          src={item.thumbnail_url}
                          alt=''
                          width={350}
                          height={350}
                          className='StyledGamePageBxImage'
                        />
                      </div>
                    )}
                    <div className='StyledGamePageInfoContainer'>
                        {item.genres && (
                          <div className='StyledGamePageGenresContainer'>
                            {item.genres.filter((_, index) => index < 4).map((genre, idx) => (
                              <div key={idx} className='StyledGamePageGenre'>
                                {genre}
                              </div>
                            ))}
                          </div>
                        )}
                        <h1 className='StyledGamePageGameTitle'>{item.title}</h1>
                        <p className={'StyledGamePageGameDescription'}>{item.description}</p>
                        {item.bx_gallery_urls && (
                          <div style={{position: "relative"}}>
                            <OnSideCarouselController id='game-page-gallery-items'></OnSideCarouselController>
                            <div className='StyledGamePageGalleryContainer' id='game-page-gallery-items'>
                              {item.movies?.map((movie, idx) => (
                                <div key={idx} className='StyledGamePageGalleryItem'>
                                  <GalleryMovieItem videoLink={movie.video} posterLink={movie.poster}></GalleryMovieItem>
                                </div>
                              ))}
                              {item.bx_gallery_urls.map((gallery_item, idx) => (
                                <div key={idx} className='StyledGamePageGalleryItem'>
                                  <GalleryItem link={gallery_item}></GalleryItem>
                                </div>
                              ))}
                            </div>
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
                {(item.exists_in_random && 208 < item.current_price) && (
                  <div className='StyledGamePageRandomGameBanner'>
                      <p className='StyledGamePageRandomGameBannerTitle'>Эта игра в пакете Случайных Игр</p>
                      <div className='StyledGamePageRandomGameBannerDescription'>
                        Сэкономь и забери игру всего лишь за 208 рублей!
                    </div>
                    <div className='StyledGamePageRandomGameBannerFooter'>
                          <div className='StyledGamePageRandomGameBannerPriceMainContainer'>
                            <div className='StyledGamePageRandomGameBannerDiscount'>
                              -{Math.round(100-100*(208/item.current_price))}%
                            </div>
                            <div className='StyledGamePageRandomGameBannerPricesContainer'>
                              <div className='StyledGamePageRandomGameBannerItemPrice'>
                                {item.current_price}₽
                              </div>
                              <div className='StyledGamePageRandomGameBannerRandomPrice'>
                                208₽
                              </div>
                            </div>
                            <Link href={"/random"} className='StyledGamePageRandomGameBannerLink'>Испытать удачу</Link>
                          </div>
                        </div>
                        <img src='/StopAnimeGirlForRandom.png' width={245} height={215} style={{position: 'absolute', bottom: '0', right: '100px'}}></img>
                      </div>
                )}
                <GameReviews itemID={item.id}></GameReviews>
                <BuyPage itemID={item.id} isSteamGift={item.type=="gift"}/>
                {(item.similar_games && item.similar_games.length > 0) && (
                  <div style={{position: 'relative', marginTop: "50px", paddingLeft: "15px"}}>
                    <h3 className='StyledGamePageSimilarGamesTitle'>Еще может заинтересовать</h3>
                    {item.similar_games.length > 5 && (
                      <OnSideCarouselController id={'game-page-similar-games'}></OnSideCarouselController>
                    )}
                    <div className='StyledGamePageSimilarGamesContainer' id='game-page-similar-games'>
                      {item.similar_games.map((similarItem, idx) => (
                          <Link href={generateItemPath(similarItem.category_id, similarItem.title, similarItem.id)} className='StyledGamePageSimilarGame' key={idx}>
                            <img className='StyledGamePageSimilarGameThumbnail' src={similarItem.thumbnail_url} width={200} height={200}></img>
                            <p className='StyledGamePageSimilarGamePrice'>{similarItem.current_price} ₽</p>
                            <p className='StyledGamePageSimilarGameTitle'>{similarItem.title}</p>
                          </Link>
                      ))}
                    </div>
                  </div>
                )}
            </div>
        </div>
    );
};

export default GamePage;