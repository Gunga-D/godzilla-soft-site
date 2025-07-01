import axios from "axios";
import { BaseUrl } from "../client";
import { CatalogItem } from "./catalogItem";

export const catalogApi = {
    async getItems(categoryId: number, filters: {
        min_price?: string;
        max_price?: string;
        platform?: string | string[];
        region?: string | string[];
        isSteamGift?: boolean,
        popular?: boolean,
        new?: boolean,
        unavailable?: boolean,
        in_sub?: boolean,
    }, limit?: number, offset?: number, randomOrder?: boolean): Promise<CatalogItem[]> {
        const queryParams = new URLSearchParams();
        let requestUrl
        if (filters.min_price) {
            queryParams.append('min_price', filters.min_price);
        }
        if (filters.max_price) {
            queryParams.append('max_price', filters.max_price);
        }
        if (filters.platform) {
            queryParams.append('platform', String(filters.platform));
        }
        if (filters.region) {
            const regionParam = String(filters.region)
            let regions = regionParam.split(";")
            regions.forEach((v, idx, arr) => {
                arr[idx] = encodeURIComponent(v);
            })
            
            queryParams.append('region', regions.join(";"));
        }
        if (filters.isSteamGift) {
            queryParams.append('steam_gift', "true");
        }
        if (filters.popular) {
            queryParams.append('popular', "1");
        }
        if (filters.new) {
            queryParams.append('new', "1");
        }
        if (filters.unavailable) {
            queryParams.append('unavailable', "1")
        }
        if (randomOrder) {
            queryParams.append('random', '1')
        }
        if (filters.in_sub) {
            queryParams.append('in_sub', "1")
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
        if (offset) {
            requestUrl += `&offset=${offset}`
        }
        const response = await axios.get(requestUrl);
        return response.data.data;
    },
};
