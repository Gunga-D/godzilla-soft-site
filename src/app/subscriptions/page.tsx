import {Catalog} from "../../layout/Catalog/Catalog";

export default async function Page({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const filters = (await searchParams)
    return (
        <div>
            <Catalog categoryID={10002} active='subscriptions' filters={filters}/>
        </div>
    );
}
