import axios from "axios";
import {BaseUrl} from "../client";
import { Category} from "./catalogItem";
import {Item} from "../item/item";


export const catalogApi = {
    async getCategoriesTree(): Promise<Category[]> {
        const requestUrl = BaseUrl + '/categories_tree';
        const response = await axios.get(requestUrl);
        return response.data.data;
    },
    async getItems(num: string): Promise<Item[]> {
        const requestUrl = BaseUrl + `/items?category_id=${num}`;
        const response = await axios.get(requestUrl);
        return response.data.data;
    }
}
