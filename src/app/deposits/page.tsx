import { Suspense } from "react";
import {Catalog} from "../../layout/Catalog/Catalog";
import { SkeletonCatalog } from "../../layout/Catalog/Skeleton/Skeleton";

export default async function Deposits({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const filters = (await searchParams)
    return (
        <div>
            <Suspense fallback={
                <SkeletonCatalog></SkeletonCatalog>
            }>
                {/* @ts-expect-error Server Component */}
                <Catalog categoryID={10004} categoryNameSEO="Пополнение App Store | Steam" 
                    categoryItemsNumber={6}
                    categoryBreadcrumbName="Пополнения" categoryBreadcrumbLink="/deposits"  
                    filters={filters}/>
            </Suspense>
        </div>
    );
}
