import axios from "axios";
import {BaseUrl} from "../client";
import {SearchItem} from "./searchItem";

export const searchApi = {
    async postSearch(query: { query: string }): Promise<SearchItem[]> {
        const requestUrl = BaseUrl + '/search_suggest';
        const response = await axios.post<{ results: SearchItem[] }>(requestUrl, { query });
        return response.data.results;
    },
};

