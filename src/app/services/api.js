import axios from "axios";

const api = axios.create({
  baseURL: 'https://18.191.97.102.nip.io',
});

export const status = async () => {
    const response = api.get('/status/');
    return response.data
}

export const getTopTracks = async (data) => {
    const response = api.post('/tracks/', data);
    return (await response).data
}

export const getTopArtists = async (data) => {
    const response = api.post('/artists/', data);
    return (await response).data
}
