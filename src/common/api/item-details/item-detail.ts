
export type ItemDetail = {
    id: number,
    title: string,
    type: string,
    description: string,
    detailed_description: string,
    category_id: number,
    platform: string,
    region: string,
    background_url?: string,
    current_price: number,
    is_for_sale: boolean,
    old_price?: number
    thumbnail_url: string,
    slip?: string,
    publisher?: string,
    creator: string,
    release_date?: string,
    bx_image_url?: string,
    bx_gallery_urls?: string[],
    movies?: {
        poster: string,
        video: string
    }[],
    pc_requirements?: {
        minimun: string,
        recommended: string
    },
    genres?: string[],
    yandex_market?: {
        rating: number,
        price: number,
        reviews_count: number
    },
    similar_games?: SimilarGameDTO[],
    horizontal_image_url?: string,
    exists_in_random: boolean
}

export type SimilarGameDTO = {
    id: number,
    type: string,
    title: string,
    category_id: number,
    thumbnail_url: string,
    current_price: number
}
