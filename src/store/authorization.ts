import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'
import axios from 'axios'
import type { SpotifyToken } from '@/types/spotify/token'

export const useSpotifyAuthorizationStore = defineStore('spotify-authorization', () => {
    const url = ref('https://accounts.spotify.com/authorize?response_type=code&client_id=a001bb568fbb401baf998e187cbb269c&redirect_uri=http://localhost:5173/authorization')

    // Client ID: a001bb568fbb401baf998e187cbb269c
    // Client Secret: 10e2e13a4cdf4aa7be5cc22997ca9e5f

    const requestAccessToken = async (code: string): Promise<SpotifyToken> => {
        return new Promise(async (resolve, reject) => {
            await axios.post(
                'https://accounts.spotify.com/api/token',
                null,
                {
                    headers: {
                        Authorization: `Basic ${btoa('a001bb568fbb401baf998e187cbb269c:10e2e13a4cdf4aa7be5cc22997ca9e5f')}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params: {
                        grant_type: 'authorization_code',
                        code: code,
                        redirect_uri: 'http://localhost:5173/authorization'
                    }
                }
            ).then((resp) => {
                resolve(resp.data)
            })
        })
    }

    const refreshToken = async (token: string): Promise<SpotifyToken> => {
        return new Promise(async (resolve, reject) => {
            await axios.post(
                'https://accounts.spotify.com/api/token',
                null,
                {
                    headers: {
                        Authorization: `Basic ${btoa('a001bb568fbb401baf998e187cbb269c:10e2e13a4cdf4aa7be5cc22997ca9e5f')}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    params: {
                        grant_type: 'refresh_token',
                        refresh_token: token
                    }
                }
            ).then((resp) => {
                resolve(resp.data)
            })
        })
    }

    return {
        url,
        requestAccessToken,
        refreshToken
    }
})