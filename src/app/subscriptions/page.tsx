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
               <SkeletonCatalog></SkeletonCatalog>
            }>
              {/* @ts-expect-error Server Component */}
                <Catalog categoryID={10002} categoryNameSEO="Подписки на сервисы" 
                    categoryItemsNumber={1}
                    categoryBreadcrumbName="Подписки" categoryBreadcrumbLink="/subscription"  
                    filters={filters}/>
            </Suspense>
        </div>
    );
}
