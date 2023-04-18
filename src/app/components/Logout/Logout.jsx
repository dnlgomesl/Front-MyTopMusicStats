import {useEffect, useContext} from "react";
import TokenContext from "../../contexts/Token";
import { Buffer } from 'buffer'
import axios from 'axios';
import './Logout.css'

window.Buffer = Buffer;

function Logout() {
    const {token, setToken} = useContext(TokenContext)

    const handleLogout = () => {
        setToken(null);
        window.localStorage.removeItem("token")
    };

    if(token){
        return (
            <div className='btns'>
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        );
    }
    

};

export default Logout;