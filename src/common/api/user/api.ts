import axios from "axios";
import { User, UserLoginResponse, UserProfileResponse, UserChangePasswordResponse, UserKeysHistoryResponse } from "./types";
import {TelegramUser} from 'telegram-login-button';

export const userApi = {
    async login(email: string, password: string): Promise<UserLoginResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/user_login`, {
            email: email,
            password: password,
        });
        return response.data;
    },
    async register(email: string, password: string): Promise<UserLoginResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/user_register`, {
            email: email,
            password: password,
        });
        return response.data;
    },
    async changePassword(email: string): Promise<UserChangePasswordResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/user_change_password`, {
            email: email,
        });
        return response.data;
    },
    async telegramLogin(usr: TelegramUser): Promise<UserLoginResponse> {
        const response = await axios.post(`https://api.godzillasoft.ru/v1/telegram_sign_in`, usr);
        return response.data;  
    },
    async profile(token: string): Promise<UserProfileResponse> {
        const response = await axios.get(`https://api.godzillasoft.ru/v1/user_profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    },
    async keys_history(token: string): Promise<UserKeysHistoryResponse> {
        const response = await axios.get(`https://api.godzillasoft.ru/v1/user_keys`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }
}