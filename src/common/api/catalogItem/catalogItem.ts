export type CatalogItem = {
    id: number,
    title: string,
    category_id: number,
    platform: string,
    region?: string,
    current_price: number,
    thumbnail_url: string
}
