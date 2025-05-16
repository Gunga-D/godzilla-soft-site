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