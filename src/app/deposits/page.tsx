import {Catalog} from "../../layout/Catalog/Catalog";

export default async function Deposits({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const filters = (await searchParams)
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <Catalog categoryID={10004} categoryNameSEO="Пополнение App Store | Steam" 
                categoryItemsNumber={6}
                categoryBreadcrumbName="Пополнения" categoryBreadcrumbLink="/deposits"  
                filters={filters}/>
        </div>
    );
}
