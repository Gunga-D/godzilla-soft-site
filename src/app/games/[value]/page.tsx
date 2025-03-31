import { getIdFromPath } from "../../../hooks/links";
import { itemDetailsApi } from "../../../common/api/item-details/item-details-api";
import GamePage from "../../../layout/GamePage/GamePage";
import React from "react";

type PageParams = { value: string };

export default async function Page({ params }: { params: PageParams }) {
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
                <h1>Данный товар не найден</h1>
            </div>
        );
    }
    return (
        <GamePage
            item={item}
        />
    );
}
