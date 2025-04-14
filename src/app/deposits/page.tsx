import {Catalog} from "../../layout/Catalog/Catalog";

export default async function Deposits({
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {
    const filters = (await searchParams)
    return (
        <div>
            <Catalog categoryID={10004} active='deposits' filters={filters}/>
        </div>
    );
}
