import React, { Suspense } from 'react';
import {CatalogItems} from "./Items/Items";
import './CatalogStyles.css'
import Link from 'next/link';
import { CatalogFilters } from './Filters/Filters';
import { CatalogCollections } from './Collections/Collections';
import { catalogApi } from '../../common/api/catalogItem/catalog-api';

type CatalogProps = {
    categoryID: number,
    categoryNameSEO: string,
    categoryItemsNumber: number,
    categoryBreadcrumbName: string,
    categoryBreadcrumbLink: string,
    filters: { [key: string]: string | string[] | undefined }
}

export const Catalog = async (props: CatalogProps) => {
    let page = 0
    if (props.filters.p) {
        page = Number(props.filters.p)
    }
    const items = await catalogApi.getItems(props.categoryID, {
        min_price: String(props.filters.priceFrom),
        max_price: String(props.filters.priceTo),
        isSteamGift: props.filters.type == 'gift',
        popular: props.filters.category == 'popular' || props.filters.category == 'unavailable',
        new: props.filters.category == 'news',
        unavailable: props.filters.category == 'unavailable',
        platform: props.filters.platform,
        region: props.filters.region,
    }, 15, page * 15)

    return (
        <div className='CatalogMain'>
            <div className='CatalogMainBreadcrumbsContainer'>
                <Link href={"/"} className='CatalogMainBreadcrumb'>Главная</Link>
                <span className='CatalogMainBreadcrumbDelimeter'>›</span>
                <Link href={props.categoryBreadcrumbLink} className='CatalogMainBreadcrumb'>{props.categoryBreadcrumbName}</Link>
            </div>
            <h1 className='CatalogTitle'>{props.categoryNameSEO} {items.length > 0 && (
                <span className='CatalogItemsCount'>{items[0].total_count}</span>
            )}</h1>
            <div className='CatalogInnerCatalogWrapper'>
                <div className='CatalogInnerFilters'>
                    {/* @ts-expect-error Server Component */}
                    <CatalogFilters categoryID={props.categoryID} filters={props.filters}></CatalogFilters>
                </div>
                <div className='CatalogInnerItems'>
                    {/* @ts-expect-error Server Component */}
                    <CatalogCollections categoryID={props.categoryID}></CatalogCollections>
                    {/* @ts-expect-error Server Component */}
                    <CatalogItems categoryID={props.categoryID} items={items} currentPage={page} itemsLimit={15}></CatalogItems>
                </div>
            </div>
        </div>
    );
};


