import axios from "axios";
import { BaseUrl } from "../client";
import { CollectionDTO, FetchCollectionsResponse } from "./collection";

export const collectionsApi = {
    async fetchCollections(category_id: number, limit: number, offset: number): Promise<CollectionDTO[]> {
        const requestUrl = BaseUrl + `/collections?category_id=${category_id}&limit=${limit}&offset=${offset}`;
        const response = await axios.get<FetchCollectionsResponse>(requestUrl);
        return response.data.data;
    },
};
