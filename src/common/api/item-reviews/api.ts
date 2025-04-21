import axios from "axios";
import {BaseUrl} from "../client";
import {FetchReviewsData, FetchReviewsResponse} from "./types";

export const itemReviewsApi = {
    async fetchReviews(id: number): Promise<FetchReviewsData> {
        const requestUrl = BaseUrl + `/reviews?item_id=${id}&limit=5`;
        const response = await axios.get<FetchReviewsResponse>(requestUrl);
        return response.data.data;
    }, 
    async postReview(item_id: number, score: number, comment?: string): Promise<number | undefined>{
        const response = await axios.post<{ data?: {
            review_id: number,
        }, status: string, message?: string }>(
            BaseUrl + "/add_review",
            { item_id: item_id, score: score, comment: comment }
        );
        return response.data.data?.review_id;
    }
}
