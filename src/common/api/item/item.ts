export type Item = {
    id?: number,
    title?: string,
    platform?: string,
    category_id?: number,
    region?: string,
    current_price?: number,
    is_for_sale?: boolean,
    old_price?: number,
    thumbnail_url: string,
    background_url?: string,
}

export type CartItem = {
    price: number,
    currency: string,
}

export type CreateOrder = {
    payment_link: string,
    order_id: string
}
