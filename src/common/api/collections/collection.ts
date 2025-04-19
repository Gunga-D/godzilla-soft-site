export type FetchCollectionsResponse = {
    status: string,
    data: CollectionDTO[]
}

export type CollectionDetailsResponse = {
    status: string,
    data: CollectionDTO
}

export type CollectionDTO = {
    id: number,
    category_id: number,
    name: string,
    description: string,
    background_image: string
}

export type FetchCollectionItemsResponse = {
    status: string,
    data: CollectionItemDTO[]
}

export type CollectionItemDTO = {
    id: number,
    title: string,
    category_id: number,
    platform: string,
    region: string,
    current_price: number,
    thumbnail_url: string,
    type: string
}
