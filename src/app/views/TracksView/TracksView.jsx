import {useContext, useEffect, useState} from "react";
import TokenContext from "../../contexts/Token";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";
import OrderContext from "../../contexts/Order";

import {getTopTracks} from "../../services/api";

import TrackList from "../../components/TrackList/TrackList";
import BarChart from "../../components/BarChart/BarChart";
import BasicTable from "../../components/BasicTable/BasicTable";
import "./TracksView.css";

function TracksView(){
    const {token, setToken} = useContext(TokenContext);
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const {order, setOrder} = useContext(OrderContext);
    const [tracks, setTracks] = useState(null)

            
    useEffect(() => {
        const mapper = {
            "Short":"short_term",
            "Medium":"medium_term",
            "Long": "long_term",
            "Padrão": "padrao",
            "Popularidade": "popularity",
            "Duração": "duration"
        }

        const getData = async () => {
            const data = await getTopTracks({"token" : token, "range" : mapper[range], "limit" : limit, "sort": mapper[order]})
            setTracks(data)
        }
        
        getData()

    }, [range, limit, order])


    if (tracks){
        return (
            <div className='main'>
                <div className='tracks-list'>
                    <h2>Esses são as músicas mais ouvidas por você</h2>
                    <TrackList tracks={tracks.top} />
                </div>
                <div className='basic-table'>
                    <BasicTable data={tracks.additional.popularity} label={"Esses são os dados referente a populariade das músicas mais ouvidas por você"}/>
                </div>
                <BarChart data={tracks.additional.artists} title={"Esses são os artistas presente nas suas músicas mais ouvidas por você"}/>
                <div className='basic-table'>
                    <BasicTable data={tracks.additional.duration} label={"Esses são os dados referente duração (em minutos) das músicas mais ouvidas por você"}/>
                </div>
                <BarChart data={tracks.additional.albuns} title={"Esses são os albuns presente nas suas músicas mais ouvidas por você"}/>
            </div>

        );
    }
}

export default TracksView;