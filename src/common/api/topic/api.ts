// topicsApi.ts
import axios from "axios";
import {BaseUrl} from "../client";
import {FetchTopicsResponse, GetTopicResponse, FetchTopicsDTO, Topic} from './topic'

export const topicApi = {
    async fetchTopics(
        filters: {
            limit?: number;
            offset?: number;
        } = {}
    ): Promise<FetchTopicsDTO[]> {
        const queryParams = new URLSearchParams();

        // Handle limit
        if (filters.limit) {
            queryParams.append('limit', filters.limit.toString());
        }

        // Handle offset
        if (filters.offset) {
            queryParams.append('offset', filters.offset.toString());
        }

        // Build the URL
        let requestUrl = `${BaseUrl}/topics`;
        if (Array.from(queryParams.keys()).length > 0) {
            requestUrl += `?${queryParams.toString()}`;
        }

        const response = await axios.get<FetchTopicsResponse>(requestUrl);
        return response.data.data
    },
    async getTopic(id: number): Promise<Topic> {
        const response = await axios.get<GetTopicResponse>(`${BaseUrl}/topic?id=${id}`);
        return response.data.data;
    }
};