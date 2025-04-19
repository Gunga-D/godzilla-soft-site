import axios from "axios";
import { BaseUrl } from "../client";
import { CollectionDTO, FetchCollectionsResponse, CollectionDetailsResponse, CollectionItemDTO, FetchCollectionItemsResponse } from "./collection";

export const collectionsApi = {
    async collectionDetails(collection_id: number): Promise<CollectionDTO> {
        const requestUrl = BaseUrl + `/collection_details?collection_id=${collection_id}`;
        const response = await axios.get<CollectionDetailsResponse>(requestUrl);
        return response.data.data;
    },
    async fetchCollections(category_id: number, limit: number, offset: number): Promise<CollectionDTO[]> {
        const requestUrl = BaseUrl + `/collections?category_id=${category_id}&limit=${limit}&offset=${offset}`;
        const response = await axios.get<FetchCollectionsResponse>(requestUrl);
        return response.data.data;
    },
    async fetchCollectionItems(collection_id: number, limit: number, offset: number): Promise<CollectionItemDTO[]> {
        const requestUrl = BaseUrl + `/collection_items?collection_id=${collection_id}&limit=${limit}&offset=${offset}`;
        const response = await axios.get<FetchCollectionItemsResponse>(requestUrl);
        return response.data.data;
    }
};
