export type FetchCollectionsResponse = {
    status: string,
    data: CollectionDTO[]
}

export type CollectionDTO = {
    id: number,
    category_id: number,
    name: string,
    description: string,
    background_image: string
}
