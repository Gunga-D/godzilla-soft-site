import { getIdFromPath } from "../../../hooks/links";
import { itemDetailsApi } from "../../../common/api/item-details/item-details-api";
import GamePage from "../../../layout/GamePage/GamePage";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";

type PageParams = Promise<{ value: string }>;

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

export async function generateMetadata(
    { params }: { params: PageParams },
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const { value } = await params;
    const itemID = getIdFromPath(value);
   
    const item = await itemDetailsApi.getItem(Number(itemID));
    let images = []
    if (item.horizontal_image_url) {
        images.push(item.horizontal_image_url)
    }
    const previousImages = (await parent).openGraph?.images || []
    images.push(...previousImages)

    return {
      title: `Купить игру ${item.title} в ${item.platform} | GODZILLASOFT`,
      description: `Купить игру ${item.title} в ${item.platform}: Товар на сайте цифровых товаров GODZILLA SOFT. Мам, купи игру`,
      openGraph: {
        images: images,
      },
    }
  }
