import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:80',
});

export const status = async () => {
    const response = api.get('/status/');
    return response.data
}

export const getTopTracks = async (data) => {
    console.log(data)
    const response = api.get('/tracks/', {data});
    console.log(response)
    return response.data
}

export const getTopArtists = async (data) => {
    const response = api.get('/artists/', {data});
    return response.data
}