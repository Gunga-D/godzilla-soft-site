export type FetchReviewsResponse = {
    status: string,
    data: FetchReviewsData
}

export type FetchReviewsData = {
    score?: number,
    reviews?: ReviewDTO[]
}

export type ReviewDTO = {
    comment: string,
    score: number,
    created_at: string
}