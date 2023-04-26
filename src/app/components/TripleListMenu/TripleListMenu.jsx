import {useContext, useEffect, useState} from 'react';
import ListMenu from '../ListMenu/ListMenu';
import TokenContext from '../../contexts/Token';
import TypeContext from "../../contexts/Type";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";
import OrderContext from '../../contexts/Order';
import Logout from '../Logout/Logout';

import './TripleListMenu.css'

function TripleListMenu(){
    const {token, setToken} = useContext(TokenContext);
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const {type, setType} = useContext(TypeContext);
    const {order, setOrder} = useContext(OrderContext)
    const [orderOptions, setOrderOptions] = useState(["Padrão"])

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

    useEffect(() => {
        if (type == 'Artistas'){
            setOrderOptions([
                'Padrão',
                'Popularidade'
            ])
        } else if (type == "Músicas"){
            setOrderOptions([
                'Padrão',
                'Popularidade',
                'Duração'
            ])
        }

    }, [type])
    
    if(token){
        return (
            <div>
                <div className='menu'>
                    <OrderContext.Provider value={{order, setOrder}}>
                        <TypeContext.Provider value={{type, setType}}>
                            <LimitContext.Provider value={{limit, setLimit}}>
                                <RangeContext.Provider value={{range, setRange}}>
                                    <ListMenu options={optionsTime} label={'Time Range'} />
                                    <ListMenu options={optionsLimit} label={'Limit'} />
                                    <ListMenu options={tracksOrArtists} label={'Tipo'} />
                                    <ListMenu options={orderOptions} label={'Tipo de ordenação'} />
                                    <Logout />
                                </RangeContext.Provider>
                            </LimitContext.Provider>
                        </TypeContext.Provider>
                    </OrderContext.Provider>
                </div>
            </div>
    
        );
    }
}

export default TripleListMenu;