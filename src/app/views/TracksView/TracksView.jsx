import * as React from 'react';
import TrackList from '../../components/TrackList/TrackList'
import BarChart from '../../components/BarChart/BarChart'
import BasicTable from '../../components/BasicTable/BasicTable'
import './TracksView.css'

function TracksView({tracks}){
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

export default TracksView;