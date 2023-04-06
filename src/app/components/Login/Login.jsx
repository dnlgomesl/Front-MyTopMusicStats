import {useEffect, useContext} from "react";
import TokenContext from "../../contexts/Token";
import "./Login.css";

function Login() {
    const CLIENT_ID='d883dc40f4d840efa20f6b4b21eb3cd1'
    const REDIRECT_URI='http://localhost:3000'
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

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    
    let loginClass = 'logout'
    if (!token) {
        loginClass = 'login'
    }

    return (
        <div className={loginClass}>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=${RESPONSE_TYPE}`}>Login
                    to Spotify</a>
                : <button onClick={logout}>Logout</button>}
        </div>
    );
}

export default Login;