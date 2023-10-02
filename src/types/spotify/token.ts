export type SpotifyToken = {
    access_token: string
    expires_in: number
    scope: string
    token_type: string
    refresh_token?: string
}