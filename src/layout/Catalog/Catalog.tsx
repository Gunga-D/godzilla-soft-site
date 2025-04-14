import React, { Suspense } from 'react';
import {CatalogItems} from "../../components/catalogItems/CatalogItems";
import './CatalogStyles.css'
import { collectionsApi } from '../../common/api/collections/collections-api';
import Link from 'next/link';
import { CatalogFilters } from './Filters/Filters';

type CatalogProps = {
    categoryID: number,
    active?: string,
    filters: { [key: string]: string | string[] | undefined }
}

export const Catalog = async (props: CatalogProps) => {
    const collections = await collectionsApi.fetchCollections(props.categoryID, 10, 0)
    return (
        <div className='CatalogMain'>
            <div className='CatalogMainBreadcrumbsContainer'>
                <Link href={"/"} className='CatalogMainBreadcrumb'>Главная</Link>
                <span className='CatalogMainBreadcrumbDelimeter'>›</span>
                <Link href={"/games"} className='CatalogMainBreadcrumb'>Игры</Link>
            </div>
            <h1 className='CatalogTitle'>Купить игру на ПК <span className='CatalogItemsCount'>305</span></h1>
            <div className='CatalogInnerCatalogWrapper'>
                <CatalogFilters filters={props.filters}></CatalogFilters>
                <div className='CatalogInnerItems'>
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
                    <Suspense>
                        <div style={{ display: 'flex', marginTop: '55px', gap: '15px' }}>
                                <CatalogItems active={props.active}/>
                        </div>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};


