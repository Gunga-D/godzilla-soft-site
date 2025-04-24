export type SearchItem = {
    suggest_type: string,
    banner_title?: string,
    banner_image?: string,
    banner_url?: string,
    currentPrice?: number;
    item_id?: number,
    item_category_id?: number,
    item_title?: string,
    item_current_price?: number,
    item_is_for_sale?: boolean,
    item_old_price?: number,
    item_thumbnail_url?: string,
    item_type?: string,
    item_horizontal_image?: string,
    item_genres?: string[],
    item_release_date?: string,
    probability: number,
}
