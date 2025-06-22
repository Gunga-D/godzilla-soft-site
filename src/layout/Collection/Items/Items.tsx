import { collectionsApi } from "../../../common/api/collections/collections-api"
import { generateItemPath } from "../../../hooks/links"
import "./ItemsStyle.css"
import { addUTM } from "../../../hooks/utm"

type CollectionItemsProps = {
    collectionID: number,
    utm_source: string | undefined
}

export const CollectionItems = async (props: CollectionItemsProps) => {
    let page = 0
    const items = await collectionsApi.fetchCollectionItems(props.collectionID, 15, page * 15)
    return (
        <div className="CollectionItemsContainer">
            <h3 className="CollectionItemsTitle">В НАС СПИСОК ПОПАЛИ СЛЕДУЮЩИЕ {items.length} ИГР ПО ТЕМАТИКЕ</h3>
            <div className='CollectionListItemsContainer'>
                {items.map((item, idx) => (
                    <a target="_blank" rel="noopener noreferrer" key={idx} className='CollectionItem' href={addUTM(generateItemPath(item.category_id, item.title, item.id), props.utm_source)}>
                        <img src={item.horizontal_image_url} className="CollectionItemThumbnail"></img>
                        <div className="CollectionItemFooter">
                            <div className="CollectionItemGenres">
                                {item.genres?.slice(0, 2).map((genre, genreIdx) => (
                                    <div key={genreIdx} className="CollectionItemGenre">
                                        {genre.split(" ").map((v) => v.length > 7?v.substring(0, 7)+'.':v).join(" ")}
                                    </div>
                                ))}
                            </div>
                            <div className="CollectionItemPrice">{item.current_price} ₽</div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}