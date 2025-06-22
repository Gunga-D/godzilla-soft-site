export type UserLoginResponse = {
    status: string,
    data: UserLoginDTO
}

export type UserLoginDTO = {
    user_id: number
    access_token: string
}

export type UserProfileResponse = {
    status: string,
    data: User
}

export type UserChangePasswordResponse = {
    status: string
}

export type User = {
    user_id: number,
    photo_url?: string,
    username?: string,
    first_name?: string,
    steam_link?: string,
    email?: string
}

export type UserKeysHistoryResponse = {
    status: string,
    data: UserKeyDTO[]
}

export type UserKeyDTO = {
    id: string,
    item_name?: string,
    code: string,
    status: string
}