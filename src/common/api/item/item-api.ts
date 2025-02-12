import {Item, CartItemDTO, CreateOrderDTO} from "./item";
import axios from "axios";
import {BaseUrl} from "../client";


export const itemApi = {
    async getItem(url: string): Promise<Item[]> {
        const requestUrl = BaseUrl + url;
        const response = await axios.get<{data:[Item]}>(requestUrl);
        return response.data.data;
    },
    async cartItem(itemId: number): Promise<CartItemDTO> {
        const response = await axios.post<{data:CartItemDTO, status: string, message: string}>(BaseUrl + "/cart_item", {item_id: itemId});
        if (response.data.status === 'error') {
            throw response.data.message
        }
        return response.data.data;
    },
    async createOrder(itemId: number, email: string): Promise<CreateOrderDTO> {
        const response = await axios.post<{data:CreateOrderDTO, status: string, message: string}>(BaseUrl + "/create_order", {item_id: itemId, email: email});
        if (response.data.status === 'error') {
            throw response.data.message
        }
        return response.data.data;
    }
}
