import axios from "axios";
import {BaseUrl} from "../client";
import {CatalogItem} from "./catalogItem";


export const catalogApi = {
    async getItem(num: string): Promise<CatalogItem[]> {
        const requestUrl = BaseUrl + '/categories_tree';
        const response = await axios.get(requestUrl);
        return response.data.data[num].children;
    }
}
