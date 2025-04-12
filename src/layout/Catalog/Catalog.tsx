import React, { Suspense } from 'react';
import {CatalogItems} from "../../components/catalogItems/CatalogItems";
import './CatalogStyles.css'
import { collectionsApi } from '../../common/api/collections/collections-api';
import Link from 'next/link';

type CatalogProps = {
    categoryID: number,
    active?: string,
}

export const CatalogComponent = async (props: CatalogProps) => {
    const collections = await collectionsApi.fetchCollections(props.categoryID, 10, 0)
    return (
        <div className='CatalogMain'>
            <h1 className='h2Style'>Купить игру на ПК <span className='CatalogItemsCount'>305</span></h1>
            <div className='CatalogCollectionsContainer'>
                {collections.map((collection, idx) => (
                    <div key={idx} className='CatalogCollectionItem'>
                        <img src={collection.background_image} className='CatalogCollectionImage'></img>
                        <div className='CatalogCollectionText'>
                            <h2 className='CatalogCollectionName'>{collection.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div className='CatalogFilters'>
                <div className='CatalogFilterAnotherCategories'>
                    <div>Игры</div>
                    <div>
                        <Link href={"/deposits"}>Пополнения</Link>
                    </div>
                    <div>
                        <Link href={"/subscriptions"}>Подписки</Link>
                    </div>
                </div>
                <div className='CatalogFilter CatalogFilterActive'>Новинки</div>
                <div className='CatalogFilter'>Популярные</div>
                <div className='CatalogFilter'>Недоступные в РФ</div>
            </div>
            <Suspense>
                <div style={{ display: 'flex', marginTop: '55px', gap: '15px' }}>
                        <CatalogItems active={props.active}/>
                </div>
            </Suspense>
        </div>
    );
};


