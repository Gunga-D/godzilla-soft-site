import Link from 'next/link';
import { collectionsApi } from '../../../common/api/collections/collections-api';
import { OnSideCarouselController } from '../../../components/onSideCarouselController/OnSideCarouselController';
import "./CollectionsStyle.css"
import { generateCollectionPath } from '../../../hooks/links';

type CatalogCollectionsProps = {
    categoryID: number
}

export const CatalogCollections = async (props: CatalogCollectionsProps) => {
    const collections = await collectionsApi.fetchCollections(props.categoryID, 10, 0)

    return (
        <div style={{position: 'relative'}}>
            {collections.length > 4 && (
                <OnSideCarouselController id='catalog-collections' offset={-15}></OnSideCarouselController>
            )}
            <div className='CatalogCollectionsContainer' id='catalog-collections'>
                {collections.map((collection, idx) => (
                    <Link key={idx} className='CatalogCollectionItem' href={generateCollectionPath(props.categoryID, collection.name, collection.id)}>
                        <img src={collection.background_image} className='CatalogCollectionImage'></img>
                        <div className='CatalogCollectionGradient'></div>
                        <div className='CatalogCollectionLabel'>
                            <span className='CatalogCollectionName'>{collection.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}