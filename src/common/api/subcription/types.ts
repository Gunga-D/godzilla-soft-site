export type SubscribeResponse = {
    status: string,
    data: {
        user_access_token?: string,
        subscription_id: string,
        redirect_link: string
    }
}


export type SubGetProductResponse = {
    status: string,
    data: {
        login: string,
        password: string
    }
}
