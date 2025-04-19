import Link from "next/link"
import { catalogApi } from "../../../common/api/catalogItem/catalog-api"
import "./ItemsStyle.css"
import { generateItemPath } from "../../../hooks/links"
import { CatalogPagination } from "../Pagination/Pagination"
import { CatalogItem } from "../../../common/api/catalogItem/catalogItem"

type CatalogItemsProps = {
    categoryID: number,
    currentPage: number,
    itemsLimit: number,
    items: CatalogItem[]
}

export const CatalogItems = async (props: CatalogItemsProps) => {
    return (
        <div className='CatalogItemsContainer'>
            {props.items.length == 0 && (
                <div className="CatalogItemsNotFound">
                    <h3 className="CatalogItemsNotFoundTitle">😐 Ничего не найдено</h3>
                    <div className="CatalogItemsNotFoundDescription">
                        <p>К сожалению, мы ничего не нашли.</p>
                        <p>Задайте поисковый запрос чуть по другому или установите более мягкие фильтры.</p>
                        <p>Может вас сможет заинтересовать наша популярная <a href="/games?platform=Steam&category=popular&type=gift" className="CatalogItemsNotFoundPopularLink">подборка</a>?</p>
                    </div>
                </div>
            )}
            {props.items.map((item, idx) => (
                <Link key={idx} className='CatalogItem' href={generateItemPath(item.category_id, item.title, item.id)}>
                    <div className="CatalogItemSlider">
                        {item.horizontal_image_url && (
                            <img src={item.horizontal_image_url} className="CatalogItemSliderPhoto"></img>
                        )}
                        {!item.horizontal_image_url && (
                            <div className="CatalogItemSliderNoPhoto">
                                <p className="CatalogItemSliderNoPhotoAlt">Без изображения</p>
                            </div>
                        )}
                    </div>
                    <div className="CatalogItemBody">
                        <div className="CatalogItemBodyTitleStep">
                            <h3 className="CatalogItemBodyTitle">{item.title}</h3>
                        </div>
                        <div className="CatalogItemBodyBadgeBar">
                            {item.genres?.map((badge, badgeIdx) => (
                                <div className="CatalogItemBodyBadge" key={badgeIdx}>
                                    {badge}
                                </div>
                            ))}
                        </div>
                        {item.release_date && (
                            <p className="CatalogItemBodyReleaseDate">
                                Дата выхода: {item.release_date}
                            </p>
                        )}
                    </div>
                    <div className="CatalogItemAside">
                        <span className="CatalogItemBodyPrice">{item.current_price} ₽</span>
                    </div>
                </Link>
            ))}
            <CatalogPagination page={props.currentPage} itemsCurrentCount={props.items.length} itemsLimitCount={props.itemsLimit}></CatalogPagination>
        </div>
    )
}