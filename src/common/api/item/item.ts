export type Item = {
    id?: number,
    title?: string,
    platform?: string,
    region?: string,
    current_price?: number,
    is_for_sale?: boolean,
    old_price?: number,
    thumbnail_url?: string,
}

export type CartItemDTO = {
    price: number,
    currency: string,
}

export type CreateOrderDTO = {
    payment_link: string,
    order_id: string
}