import {useContext, useEffect, useState} from "react";
import TokenContext from "../../contexts/Token";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";
import OrderContext from "../../contexts/Order";

import {getTopTracks} from "../../services/api";

import TrackList from "../../components/TrackList/TrackList";
import BarChart from "../../components/BarChart/BarChart";
import BasicTable from "../../components/BasicTable/BasicTable";
import PieChart from "../../components/PieChart/PieChart";
import LineChart from "../../components/LineChart/LineChart";
import "./TracksView.css";

function TracksView(){
    const {token, setToken} = useContext(TokenContext);
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const {order, setOrder} = useContext(OrderContext);
    const [tracks, setTracks] = useState(null)

            
    useEffect(() => {
        const mapper = {
            "Últimas 4 semanas":"short_term",
            "Últimos 6 meses":"medium_term",
            "Todos os tempos": "long_term",
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
                    <BasicTable data={tracks.additional.popularity} label={"Esses são os dados referente a popularidade das músicas mais ouvidas por você"}/>
                </div>
                <BarChart data={tracks.additional.artists} title={"Esses são os artistas presente nas músicas mais ouvidas por você"}/>
                <div className='basic-table'>
                    <BasicTable data={tracks.additional.duration} label={"Esses são os dados referente duração (em minutos) das músicas mais ouvidas por você"}/>
                </div>
                <BarChart data={tracks.additional.albuns} title={"Esses são os albuns presente nas músicas mais ouvidas por você"}/>
                <PieChart data={tracks.additional.decades.count} title={"Essas são as décadas presente nas músicas mais ouvidas por você"}/>
                <LineChart data={tracks.additional.decades.popularity} title={"Esses são as médias, modas e medianas da popularidade das músicas de acordo com a década"} />
            </div>

        );
    }
}

export default TracksView;