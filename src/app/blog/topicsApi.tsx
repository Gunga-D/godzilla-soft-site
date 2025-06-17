// topicsApi.ts
import axios from "axios";
import { BaseUrl } from "../../common/api/client";

export type Topic = {
    id: number;
    preview_url: string;
    title: string;
    created_at: string;
    updated_at: string;
    topic_content: string,
    key?: unknown;
};

export const topicsApi = {
    async getTopics(
        filters: {
            limit?: number;
            offset?: number;
            order_by?: "newest" | "oldest" | "updated";
            search?: string;
        } = {}
    ): Promise<Topic[]> {
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

        try {
            const response = await axios.get(requestUrl);
            return response.data.data;
        } catch (error) {
            console.error("Error fetching topics:", error);
            throw error;
        }
    },
    async getTopic(id: number): Promise<Topic> {
        let requestUrl = `${BaseUrl}/topic?id=${id}`;
        try {
            console.log(requestUrl)
            const response = await axios.get(requestUrl);
            return response.data.data;
        } catch (error) {
            console.error("Error fetching topics:", error);
            throw error;
        }
    }
};