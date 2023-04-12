import {useContext, useEffect, useState} from "react";
import TokenContext from "../../contexts/Token";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";

import {getTopArtists} from "../../services/api";

import ArtistList from '../../components/ArtistList/ArtistList'
import BarChart from '../../components/BarChart/BarChart'
import BasicTable from '../../components/BasicTable/BasicTable'
import './ArtistsView.css'

function ArtistsView(){
    const {token, setToken} = useContext(TokenContext)
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const [artists, setArtists] = useState(null)

            
    useEffect(() => {
        const mapper = {
            "Short":"short_term",
            "Medium":"medium_term",
            "Long": "long_term",
        }

        const getData = async () => {
            const data = await getTopArtists({"token" : token, "range" : mapper[range], "limit" : limit})
            setArtists(data)
        }
        
        getData()

    }, [])

    if (artists) {
        return (
            <div className='main'>
                <div className='artist-list'>
                    <h2>Esses são os artistas mais ouvidos por você</h2>
                    <ArtistList artists={artists.top} />
                </div>
                <div className='basic-table'>
                    <BasicTable data={artists.additional.popularity} label={"Esses são os dados referentes a populariade dos artistas mais ouvidos por você"}/>
                </div>
                <BarChart data={artists.additional.genres} title={"Esses são os gêneros musicais presentes nos seus artistas mais ouvidos por você"}/>
            </div>
    
        );
    }
}

export default ArtistsView;