export type ThinkResponse = {
    status: string,
    data: {
        id: string
    }
}

export type ThinkResultResponse = {
    status: string,
    data: ThinkResultDTO
}

export type ThinkResultDTO = {
    reflection: string,
    items: ThinkResultItemDTO[]
}

export type ThinkResultItemDTO = {
    id: number,
    category_id: number,
    title: string,
    current_price: number,
    type: string,
    horizontal_image?: string,
    genres?: string[],
    release_date?: string
}