import { Item, CartItem, CreateOrder } from "./item";
import axios, { AxiosRequestConfig } from "axios";
import { BaseUrl } from "../client";

export const itemApi = {
    async getItem(url: string): Promise<Item[]> {
        try {
            const requestUrl = BaseUrl + url;
            const response = await axios.get<{ data: [Item] }>(requestUrl);
            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 404) {
                    throw new Error('Такого товара нет в наличии');
                } else if(error.response?.status === 409) {
                    throw new Error('Данный товар уже закончился');
                }
            }
            throw new Error('Произошла неизвестная ошибка');
        }
    },

    async cartItem(itemId: number): Promise<CartItem> {
        try {
            const response = await axios.post<{ data: CartItem, status: string, message: string }>(
                BaseUrl + "/cart_item",
                { item_id: itemId }
            );

            if (response.data.status === 'error') {
                throw new Error(response.data.message);
            }

            return response.data.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === 404) {
                    throw new Error('Такого товара нет в наличии');
                } else if(error.response?.status === 409) {
                    throw new Error('Данный товар уже закончился');
                }
            }
            throw new Error('Произошла неизвестная ошибка');
        }
    },

    async createKeyOrder(itemId: number, email: string, accessToken: string | null): Promise<CreateOrder> {
        let req: AxiosRequestConfig = {}
        if (accessToken) {
            req.headers = {
                'Authorization': `Bearer ${accessToken}`
            } 
        }

        const response = await axios.post<{ data: CreateOrder, status: string, message: string }>(
            BaseUrl + "/create_order",
            { item_id: itemId, email: email },
            req
        );
        return response.data.data;
    },
    async createGiftOrder(itemId: number, steam_profile: string, accessToken: string | null): Promise<CreateOrder> {
        let req: AxiosRequestConfig = {}
        if (accessToken) {
            req.headers = {
                'Authorization': `Bearer ${accessToken}`
            } 
        }
        const response = await axios.post<{ data: CreateOrder, status: string, message: string }>(
            BaseUrl + "/create_order",
            {
                item_id: itemId,
                steam_profile: steam_profile,
            },
            req
        );
        return response.data.data;
    },
};
