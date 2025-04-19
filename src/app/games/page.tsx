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
            <Catalog categoryID={10001} categoryNameSEO="Купить игру на ПК"
                categoryItemsNumber={305}
                categoryBreadcrumbName="Игры" categoryBreadcrumbLink="/games?type=gift&category=popular"  
                filters={filters}/>
        </div>
    );
}
