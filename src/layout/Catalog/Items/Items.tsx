import "./ItemsStyle.css"
import { generateItemPath } from "../../../hooks/links"
import { CatalogPagination } from "../Pagination/Pagination"
import { CatalogItem } from "../../../common/api/catalogItem/catalogItem"
import { addUTM } from "../../../hooks/utm"

type CatalogItemsProps = {
    categoryID: number,
    currentPage: number,
    itemsLimit: number,
    utm_source: any,
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
                        <p>Может вас сможет заинтересовать наша популярная <a href={addUTM("/games?platform=Steam&category=popular&type=gift", props.utm_source)} className="CatalogItemsNotFoundPopularLink">подборка</a>?</p>
                    </div>
                </div>
            )}
            {props.items.map((item, idx) => (
                <a target="_blank" rel="noopener noreferrer" key={idx} className='CatalogItem' href={addUTM(generateItemPath(item.category_id, item.title, item.id), props.utm_source)}>
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
                            {item.in_sub && (
                                <div className="CatalogItemBodySubscriptionBadge">
                                    В подписке
                                </div>
                            )}
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
                </a>
            ))}
            <CatalogPagination page={props.currentPage} itemsCurrentCount={props.items.length} itemsLimitCount={props.itemsLimit} utm_source={props.utm_source}></CatalogPagination>
        </div>
    )
}