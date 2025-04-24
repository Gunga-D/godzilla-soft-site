import axios from "axios";
import { ThinkResponse, ThinkResultResponse } from "./types";

export const deepthinkApi = {
    async think(query: string): Promise<ThinkResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/think`, {
            query: query,
        });
        return response.data;
    },
    async getThinkResult(id: string): Promise<ThinkResultResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/think_result`, {
            id: id,
        });
        return response.data;
    }
}