import {useEffect, useContext} from "react";
import TokenContext from "../../contexts/Token";
import "./Login.css";

function Login() {
    const CLIENT_ID='d883dc40f4d840efa20f6b4b21eb3cd1'
    const REDIRECT_URI='https://my-dashboard-to-spotify.vercel.app'
    const AUTH_ENDPOINT='https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE='token'
    const SCOPES=['user-top-read']

    const {token, setToken} = useContext(TokenContext)

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    if (!token) {
        return (
            <div className='login'>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=${RESPONSE_TYPE}&show_dialog=${true}`}>Login
                        to Spotify</a>
            </div>
        );
    }
}

export default Login;
