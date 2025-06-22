import { getIdFromPath } from "../../../hooks/links";
import { itemDetailsApi } from "../../../common/api/item-details/item-details-api";
import GamePage from "../../../layout/GamePage/GamePage";

type PageParams = Promise<{ value: string }>;

export default async function Page({ params, searchParams }: { params: PageParams, searchParams: Promise<{ [key: string]: string | string[] | undefined  }>}) {
    const { value } = await params;
    const itemID = getIdFromPath(value);

    if (!itemID) {
        return (
            <div>
                <h1>Данный товар не найден</h1>
            </div>
        );
    }

    const item = await itemDetailsApi.getItem(Number(itemID));

    if (!item) {
        return (
            <div>
                <h1>Данный товар закончился</h1>
            </div>
        );
    }

    const queries = (await searchParams)
    return (
        <GamePage
            item={item}
            utm_source={queries["utm_source"]}
        />
    );
}
