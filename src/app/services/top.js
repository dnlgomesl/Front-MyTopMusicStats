import api from "./api.js"

export const status = async () => {
    const response = api.get('/status/');
    return response.data
}

export const getTopTracks = async (data) => {
    console.log(data)
    const response = api.get('/tracks/', {data});
    return response.data
}

export const getTopArtists = async (data) => {
    const response = api.get('/artists/', {data});
    return response.data
}