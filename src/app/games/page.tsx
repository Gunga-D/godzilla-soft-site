import { Suspense } from "react";
import {Catalog} from "../../layout/Catalog/Catalog";
import { SkeletonCatalog } from "../../layout/Catalog/Skeleton/Skeleton";

export default async function Page({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const filters = (await searchParams)
    return (
        <div>
            <Suspense fallback={
                {/* @ts-expect-error Server Component */}
                <SkeletonCatalog></SkeletonCatalog>
            }>
                {/* @ts-expect-error Server Component */}
                <Catalog categoryID={10001} categoryNameSEO="Купить игру на ПК"
                    categoryItemsNumber={305}
                    categoryBreadcrumbName="Игры" categoryBreadcrumbLink="/games?type=gift&category=popular"  
                    filters={filters}/>
            </Suspense>
        </div>
    );
}
