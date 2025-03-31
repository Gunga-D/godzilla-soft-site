import axios from "axios";
import { ResolveSteamProfileResponse } from "./types";

export const steamGiftApi = {
    async resolveProfile(profile_url: string): Promise<ResolveSteamProfileResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/steam_gift/resolve_profile`, {
            profile_url: profile_url,
        });
        return response.data;
    }
}