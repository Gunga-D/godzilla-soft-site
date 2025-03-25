import axios from "axios";
import {BaseUrl} from "../client";
import {ItemDetail} from "./item-detail";

export const itemDetailsApi = {
    async getItem(id: number): Promise<ItemDetail> {
        const requestUrl = BaseUrl + `/item_details?item_id=${id}`;
        const response = await axios.get<{data:ItemDetail}>(requestUrl);
        return response.data.data;
    }
}
