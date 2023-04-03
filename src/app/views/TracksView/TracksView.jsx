import * as React from 'react';
import TripleListMenu from '../../components/TripleListMenu/TripleListMenu';
import TrackList from '../../components/TrackList/TrackList'
import BarChart from '../../components/BarChart/BarChart'
import BasicTable from '../../components/BasicTable/BasicTable'
import tracksApi from '../../mock/mockTracks';
import './TracksView.css'

function TracksView(){
    return (
        <div className='main'>
            <TripleListMenu />
            <div className='tracks-list'>
                <h2>Esses são as músicas mais ouvidas por você</h2>
                <TrackList tracks={tracksApi.top} />
            </div>
            <div className='basic-table'>
                <BasicTable data={tracksApi.additional.popularity} label={"Esses são os dados referente a populariade das músicas mais ouvidas por você"}/>
            </div>
            <BarChart data={tracksApi.additional.artists} title={"Esses são os artistas presente nas suas músicas mais ouvidas por você"}/>
            <div className='basic-table'>
                <BasicTable data={tracksApi.additional.duration} label={"Esses são os dados referente duração (em minutos) das músicas mais ouvidas por você"}/>
            </div>
            <BarChart data={tracksApi.additional.albuns} title={"Esses são os albuns presente nas suas músicas mais ouvidas por você"}/>
        </div>

    );
}

export default TracksView;