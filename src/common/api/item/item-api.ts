import {Item, CartItemDTO} from "./item";
import axios from "axios";
import {BaseUrl} from "../client";


export const itemApi = {
    async getItem(url: string): Promise<Item[]> {
        const requestUrl = BaseUrl + url;
        const response = await axios.get<{data:[Item]}>(requestUrl);
        return response.data.data;
    },
    async cartItem(itemId: number): Promise<CartItemDTO> {
        const response = await axios.post<{data:CartItemDTO}>(BaseUrl + "/cart_item", {item_id: itemId});
        return response.data.data;
    }
}
