export type SteamCalcRequest = {
    amount: number;
}

export type SteamCalcResponse = {
    status: string;
    error?: string;
    data: {
        price: number;
    }
}

export type SteamCreateInvoiceRequest = {
    steam_login: string;
    amount: number;
}

export type SteamCreateInvoiceResponse = {
    status: string;
    error?: string;
    data: {
        order_id: string;
        payment_link: string;
    }
}