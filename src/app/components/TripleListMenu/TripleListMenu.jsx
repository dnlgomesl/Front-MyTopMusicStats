import {useContext} from 'react';
import ListMenu from '../ListMenu/ListMenu';
import TokenContext from '../../contexts/Token';
import './TripleListMenu.css'

function TripleListMenu(){
    const {token, setToken} = useContext(TokenContext)

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
    
    if(!!token){
        return (
            <div>
                <div className='menu'>
                    <ListMenu options={optionsTime} label={'Time Range'} />
                    <ListMenu options={optionsLimit} label={'Limt'} />
                    <ListMenu options={tracksOrArtists} label={'Tipo'} />
                </div>
            </div>
    
        );
    }
}

export default TripleListMenu;