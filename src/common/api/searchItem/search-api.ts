import axios from "axios";
import {BaseUrl} from "../client";
import {SearchItem} from "./searchItem";

export const searchApi = {
    async suggest(query: string ): Promise<SearchItem[]> {
        const requestUrl = BaseUrl + '/search_suggest';
        const response = await axios.post<{
            status: string
            data:  {
                items: SearchItem[]
            }
        }>(requestUrl, { query });
        if (response.data.status != "ok") {
            Promise.reject("invalid response")
        }
        return response.data.data.items;
    },
};

