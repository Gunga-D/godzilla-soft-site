import axios from "axios";
import { SubGetProductResponse, SubscribeResponse } from "./types";

export const subApi = {
    async subscribe(period: string, token: string | null, email: string | null): Promise<SubscribeResponse> {
        if (token) {
            const response = await axios.post(`https://api.godzillasoft.ru/v1/subscribe`, {
                period: period,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data
        }
        const response = await axios.post(`https://api.godzillasoft.ru/v1/subscribe`, {
            period: period,
            email: email,
        });
        return response.data;
    },
    async getProduct(item_id: number, token: string | null): Promise<SubGetProductResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/subscription_product`, {
            item_id: item_id,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    },
}