import {useContext} from 'react';
import ListMenu from '../ListMenu/ListMenu';
import TokenContext from '../../contexts/Token';
import TypeContext from "../../contexts/Type";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";

import './TripleListMenu.css'

function TripleListMenu(){
    const {token, setToken} = useContext(TokenContext);
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const {type, setType} = useContext(TypeContext);

    const optionsTime = [
        'Short',
        'Medium',
        'Long',
    ]

    const optionsLimit = [
        '10',
        '20',
        '50'
    ]

    const tracksOrArtists = [
        'Artistas',
        'Músicas'
    ]

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    
    if(!!token){
        return (
            <div>
                <div className='menu'>
                    <TypeContext.Provider value={{type, setType}}>
                        <LimitContext.Provider value={{limit, setLimit}}>
                            <RangeContext.Provider value={{range, setRange}}>
                                <ListMenu options={optionsTime} label={'Time Range'} />
                                <ListMenu options={optionsLimit} label={'Limit'} />
                                <ListMenu options={tracksOrArtists} label={'Tipo'} />
                                <button onClick={logout}>Logout</button>
                            </RangeContext.Provider>
                        </LimitContext.Provider>
                    </TypeContext.Provider>  
                </div>
            </div>
    
        );
    }
}

export default TripleListMenu;