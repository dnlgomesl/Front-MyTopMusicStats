import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:80',
});

export const status = async () => {
    const response = api.get('/status/');
    return response.data
}

export const getTopTracks = async (data) => {
    const response = api.post('/tracks/', data);
    return response.data
}

export const getTopArtists = async (data) => {
    const response = api.post('/artists/', data);
    return response.data
}