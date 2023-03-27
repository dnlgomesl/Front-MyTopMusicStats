import tccApi from "./tccApi.js"

export const status = () => {
    tccApi.get('/status/');
}

export const getTopTracks = (token, range, limit) => {
    tccApi.get('/tracks/', { token: token, range: range, limit: limit});
}

export const getTopArtists = (token, range, limit) => {
    tccApi.get('/artists/', { token: token, range: range, limit: limit});
}