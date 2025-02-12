import axios from "axios";
import { BaseUrl } from "../client";
import { Category } from "./catalogItem";
import { Item } from "../item/item";

export const catalogApi = {
    async getCategoriesTree(): Promise<Category[]> {
        const requestUrl = BaseUrl + '/categories_tree';
        const response = await axios.get(requestUrl);
        return response.data.data;
    },

    async getItems(categoryId: string, filters: {
        min_price?: string;
        max_price?: string;
        platform?: string;
        region?: string;
    }): Promise<Item[]> {
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
        if (filters.region || filters.max_price || filters.min_price || filters.platform){
             requestUrl = `${BaseUrl}/items?limit=100&category_id=${categoryId}&${queryParams.toString()}`;
        } else {
             requestUrl = `${BaseUrl}/items?limit=100&category_id=${categoryId}`;

        }
        const response = await axios.get(requestUrl);
        return response.data.data;
    },
};
