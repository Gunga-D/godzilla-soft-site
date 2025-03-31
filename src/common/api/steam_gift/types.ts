export type ResolveSteamProfileResponse = {
    status: string,
    data: SteamProfileDTO
}

export type SteamProfileDTO = {
    avatar_url: string
    profile_name: string
}