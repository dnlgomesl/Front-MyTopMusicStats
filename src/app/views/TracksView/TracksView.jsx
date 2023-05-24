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
import Loading from "../../components/Loading/Loading";

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

        setTracks(null);

        const getData = async () => {
            const data = await getTopTracks({"token" : token, "range" : mapper[range], "limit" : limit, "sort": mapper[order]})
            setTracks(data)
        }
        
        getData()

    }, [range, limit, order])

    if (tracks == null) {
        return (
            <Loading />
        );
    } else {
        return (
            <div className='main'>
                <div className='tracks-list'>
                    <h2>Esses são as músicas mais ouvidas por você</h2>
                    <TrackList tracks={tracks.top} />
                </div>
                <div className='basic-table'>
                    <BasicTable data={tracks.additional.popularity} 
                    label={"Esses são os dados referente a popularidade das músicas mais ouvidas por você"}
                    textTooltip={'A popularidade vai de 0 a 100. Os seguintes dados mostram, em geral, como suas músicas são populares.'}
                    element={'track-pop'}/>
                </div>
                <BarChart data={tracks.additional.artists} 
                title={"Esses são os artistas presente nas músicas mais ouvidas por você"}
                desc={"Foi feito uma contagem de quais artistas estão presentes nesse conjunto de músicas."}/>
                <div className='basic-table'>
                    <BasicTable data={tracks.additional.duration} 
                    label={"Esses são os dados referente duração (em minutos) das músicas mais ouvidas por você"}
                    textTooltip={'Os seguintes dados mostram, em geral, qual a duração das músicas mais ouvidas por você.'}
                    element={'track-dur'}/>
                </div>
                <BarChart data={tracks.additional.albuns} 
                title={"Esses são os albuns presente nas músicas mais ouvidas por você"}
                desc={"Foi feito uma contagem de quais albuns estão presentes nesse conjunto de músicas."}/>
                <PieChart data={tracks.additional.decades.count} 
                title={"Essas são as décadas presente nas músicas mais ouvidas por você"}/>
                <LineChart data={tracks.additional.decades.popularity} 
                title={"Esses são as médias, modas e medianas da popularidade das músicas de acordo com a década"} />
                <h1>Essas são algumas características sobre as músicas mais ouvidas por você</h1>
                <BarChart data={tracks.features.acousticness} 
                title={"Aqui está quanto suas músicas são acústicas"}
                desc={"Essa é uma medida de 0 a 1 que diz quanto uma música é acústica ou não. Quanto mais próxima de 1, mais acústica é"}/>
                <BarChart data={tracks.features.danceability} 
                title={"Aqui está quanto suas músicas são dançáveis"}
                desc={"Essa é uma medida de 0 a 1 que diz quanto uma música é dançável ou não. Quanto mais próxima de 1, mais dançável é"}/>
                <BarChart data={tracks.features.energy} 
                title={"Aqui está quanto suas músicas são enérgicas, intensivas"}
                desc={"Essa é uma medida de 0 a 1 e representa quanto uma música é intensiva. Músicas mais enérgicas tendem a ser mais rápidas, altas e barulhentas. Quanto mais próximo de 1, mais enérgica"}/>
                <BarChart data={tracks.features.instrumentalness} 
                title={"Aqui está quanto suas músicas são instrumentais"}
                desc={"Essa é uma medida de 0 a 1 que diz quanto de vocal tem uma música. Quanto mais próximo de 1, mais são as chances da música não ter vocal"}/>
                <BarChart data={tracks.features.liveness} 
                title={"Aqui está quanto suas músicas tem alguma presença de público na gravação."}
                desc={"Essa é uma medida de 0 a 1 que diz se tem a presença de audiência na gravação. Quanto mais próximo de 1, mais são as chances de ter presença de público nas músicas"}/>
                <BarChart data={tracks.features.valence} 
                title={"Aqui está quanto suas músicas são positivas"}
                desc={"Essa é uma medida de 0 a 1 que descreve a positividade musical transmitida por uma faixa. Qanto mais próximo de 1 mais positiva é a música"}/>
            </div>

        );
    }
}

export default TracksView;