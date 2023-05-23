import {useContext, useEffect, useState} from "react";
import TokenContext from "../../contexts/Token";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";
import OrderContext from "../../contexts/Order";

import {getTopArtists} from "../../services/api";

import ArtistList from "../../components/ArtistList/ArtistList";
import BarChart from "../../components/BarChart/BarChart";
import BasicTable from "../../components/BasicTable/BasicTable";
import Loading from "../../components/Loading/Loading";

import "./ArtistsView.css";

function ArtistsView(){
    const {token, setToken} = useContext(TokenContext);
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const {order, setOrder} = useContext(OrderContext);
    const [artists, setArtists] = useState(null)

            
    useEffect(() => {
        const mapper = {
            "Últimas 4 semanas":"short_term",
            "Últimos 6 meses":"medium_term",
            "Todos os tempos": "long_term",
            "Padrão": "padrao",
            "Popularidade": "popularity",
            "Duração": "duration"
        }

        setArtists(null)

        const getData = async () => {
            const data = await getTopArtists({"token" : token, "range" : mapper[range], "limit" : limit, "sort" : mapper[order]})
            setArtists(data)
        }
        
        getData()

    }, [range, limit, order])

    if (artists == null) {
        return (
            <Loading />
        );
    } else {
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