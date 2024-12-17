import {Item} from "./item";
import axios from "axios";
import {BaseUrl} from "../client";


export const itemApi = {
    async getItem(url: string): Promise<Item[]> {
            const requestUrl = BaseUrl + url;
            const response = await axios.get<{data:[Item]}>(requestUrl);
            return response.data.data;
        }
}
