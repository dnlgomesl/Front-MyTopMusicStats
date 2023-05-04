import {useContext, useEffect} from "react";
import TokenContext from "../../contexts/Token";
import './Logout.css'

function Logout() {
    const {token, setToken} = useContext(TokenContext)

    const handleLogout = () => {
        setToken(null);
        window.localStorage.removeItem("token")
    };

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          handleLogout();
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    if(token){
        return (
            <div className='btns'>
                <button className='btn' onClick={handleLogout}>Logout</button>
            </div>
        );
    }
    

};

export default Logout;