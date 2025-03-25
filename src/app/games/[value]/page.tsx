import { getIdFromPath } from "../../../hooks/transliterate";
import { itemDetailsApi } from "../../../common/api/item-details/item-details-api";
import GamePage from "../../../layout/GamePage/GamePage";
import React from "react";
import styled from "styled-components";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type PageParams = { value: string };

export default async function Page({ params }: { params: PageParams }) {
    const { value } = params;
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
