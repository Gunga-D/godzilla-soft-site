import { generateItemPath, getIdFromPath } from "../../../hooks/links";
import { itemDetailsApi } from "../../../common/api/item-details/item-details-api";
import GamePage from "../../../layout/GamePage/GamePage";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";

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
                <h1>Данный товар не найден</h1>
            </div>
        );
    }

    const productData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "image": item.thumbnail_url,
        "name": `Купить ${item.title} ${item.type=='gift'?'гифтом':'ключом'}`,
        "description": item.description,
        "offers": {
          "@type": "Offer",
          "url": `https://godzillasoft.ru${generateItemPath(item.category_id, item.title, item.id)}`,
          "price": item.current_price,
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
        }
    };

    const queries = (await searchParams)
    return (
        <>
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
            />
           <GamePage
            item={item}
            utm_source={queries["utm_source"]}
            />
        </>
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
    } else {
        const previousImages = (await parent).openGraph?.images || []
        images.push(...previousImages)
    }

    return {
      metadataBase: new URL('https://godzillasoft.ru'),
      title: `Купить игру ${item.title} в ${item.platform} | GODZILLASOFT`,
      description: `Купить игру ${item.title} в ${item.platform}: Товар на сайте цифровых товаров GODZILLA SOFT.`,
      icons: {
         other: [
             { rel: 'alternate', url: `https://m.godzillasoft.ru/${generateItemPath(item.category_id, item.title, item.id)}`, media: "only screen and (max-width: 640px)" },
         ]
      },
      openGraph: {
        type: "website",
        images: images,
        locale: "ru_RU",
        countryName: "ru",
        url: `${generateItemPath(item.category_id, item.title, item.id)}`,
      },
      alternates: {
        canonical: `${generateItemPath(item.category_id, item.title, item.id)}`
      }
    }
  }
