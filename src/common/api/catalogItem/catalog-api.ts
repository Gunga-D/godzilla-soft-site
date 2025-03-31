import axios from "axios";
import { BaseUrl } from "../client";
import { CatalogItem } from "./catalogItem";

export const catalogApi = {
    async getItems(categoryId: number, filters: {
        min_price?: string;
        max_price?: string;
        platform?: string;
        region?: string;
        isSteamGift?: boolean
    }, limit?: number): Promise<CatalogItem[]> {
        const queryParams = new URLSearchParams();
        let requestUrl
        if (filters.min_price) {
            queryParams.append('min_price', filters.min_price);
        }
        if (filters.max_price) {
            queryParams.append('max_price', filters.max_price);
        }
        if (filters.platform) {
            queryParams.append('platform', filters.platform);
        }
        if (filters.region) {
            queryParams.append('region', filters.region);
        }
        if (filters.isSteamGift) {
            queryParams.append('steam_gift', "true");
        }
        let itemsLimit = 100
        if (limit) {
            itemsLimit = limit
        }
        if (filters.region || filters.max_price || filters.min_price || filters.platform || filters.isSteamGift){
             requestUrl = `${BaseUrl}/items?limit=${itemsLimit}&category_id=${categoryId}&${queryParams.toString()}`;
        } else {
             requestUrl = `${BaseUrl}/items?limit=${itemsLimit}&category_id=${categoryId}`;
        }
        const response = await axios.get(requestUrl);
        return response.data.data;
    },
};
