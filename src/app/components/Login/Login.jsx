import {useEffect, useContext} from "react";
import TokenContext from "../../contexts/Token";
import "./Login.css";

function Login() {
    const CLIENT_ID=''
    const REDIRECT_URI='https://my-top-music-stats.vercel.app/'
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
            <div className="main-login">
                <div className="info-login">
                    <p>O My Top Music Stats é um projeto de Trabalho de Conclusão de Curso que visa mostrar para você que usa o Spotify um pequeno dashboard com informações referente ao que você vem escutando.</p>
                </div>
                <div className='login'>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join("%20")}&response_type=${RESPONSE_TYPE}&show_dialog=${true}`}>Login
                        to Spotify</a>
                </div>
            </div>

        );
    }
}

export default Login;
