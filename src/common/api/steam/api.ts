import axios from "axios";
import {BaseUrl} from "../client";
import {SteamCalcRequest, SteamCalcResponse, SteamCreateInvoiceRequest, SteamCreateInvoiceResponse} from "./types";

export const steamApi = {
    async calc(req: SteamCalcRequest): Promise<SteamCalcResponse> {
        const requestUrl = BaseUrl + '/steam_calc';
        const response = await axios.post<SteamCalcResponse>(requestUrl, req);
        return response.data;
    },
    async createInvoice(req: SteamCreateInvoiceRequest): Promise<SteamCreateInvoiceResponse> {
        const requestUrl = BaseUrl + '/steam_invoice';
        const response = await axios.post<SteamCreateInvoiceResponse>(requestUrl, req);
        return response.data;
    }
};