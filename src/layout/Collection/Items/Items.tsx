import Link from "next/link"
import { collectionsApi } from "../../../common/api/collections/collections-api"
import { generateItemPath } from "../../../hooks/links"
import "./ItemsStyle.css"

type CollectionItemsProps = {
    collectionID: number
}

export const CollectionItems = async (props: CollectionItemsProps) => {
    let page = 0
    const items = await collectionsApi.fetchCollectionItems(props.collectionID, 15, page * 15)
    return (
        <div className="CollectionItemsContainer">
            <h3 className="CollectionItemsTitle">В нас список попали следующие {items.length} игр</h3>
            <span className="CollectionItemsDesc">🔍 Мы проанализировали более 1000 игр, чтобы собрать для вас самую лучшую подборку.</span>
            <div className='CollectionListItemsContainer'>
                {items.map((item, idx) => (
                    <Link key={idx} className='CollectionItem' href={generateItemPath(item.category_id, item.title, item.id)}>
                        <img src={item.thumbnail_url} className="CollectionItemThumbnail"></img>
                        <h3 className="CollectionItemTitle">{item.title}</h3>
                        <p className="CollectionItemPrice">{item.current_price} ₽</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}