export type CatalogItem = {
    id: number,
    title: string,
    category_id: number,
    platform: string,
    region?: string,
    current_price: number,
    thumbnail_url: string,
    horizontal_image_url?: string,
    genres?: string[],
    description?: string,
    release_date?: string,
    total_count?: number
}
