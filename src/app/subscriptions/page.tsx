import {Catalog} from "../../layout/Catalog/Catalog";

export default async function Page({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const filters = (await searchParams)
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <Catalog categoryID={10002} categoryNameSEO="Подписки на сервисы" 
                categoryItemsNumber={1}
                categoryBreadcrumbName="Подписки" categoryBreadcrumbLink="/subscription"  
                filters={filters}/>
        </div>
    );
}
