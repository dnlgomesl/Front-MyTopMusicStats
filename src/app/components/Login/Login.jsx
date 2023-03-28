import {useEffect, useState} from "react";
import { getTopTracks } from "../../services/api";

function Login() {

    const CLIENT_ID='d883dc40f4d840efa20f6b4b21eb3cd1'
    const REDIRECT_URI='http://localhost:3000'
    const AUTH_ENDPOINT='https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE='token'
    const SCOPES=['user-top-read']

    const [token, setToken] = useState("")
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

        const getData = async () => {
            const data = await getTopTracks({"token":token, "range":"medium_term", "limit": "10"})
            setTracks(data)
          }
      
          getData()

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
  
    console.log(tracks)

    return (
        <div className="login">
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=${RESPONSE_TYPE}`}>Login
                    to Spotify</a>
                : <button onClick={logout}>Logout</button>}
        </div>
    );
}

export default Login;