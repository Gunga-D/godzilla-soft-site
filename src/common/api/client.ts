import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export const BaseUrl = 'https://api.godzillasoft.ru/v1';

export type ApiConfig = {
    baseURL?: string;
    withCredentials?: boolean;
}
export class ApiClient {
    client: AxiosInstance;
    constructor(config?: ApiConfig) {
        this.client = axios.create({
            headers: {
                'Content-Type': 'application/json',
                post: {
                    'Content-Type': 'application/json'
                }
            },
            baseURL: config?.baseURL,
            withCredentials: config?.withCredentials
        });
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.get(url, config);
    }

    public post<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.post(url, data, config);
    }

    public put<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.put(url, data, config);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.client.delete(url, config);
    }
}

