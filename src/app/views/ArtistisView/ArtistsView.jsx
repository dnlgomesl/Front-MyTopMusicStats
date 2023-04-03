import * as React from 'react';
import DoubleListMenu from '../../components/DoubleListMenu/DoubleListMenu';
import ArtistList from '../../components/ArtistList/ArtistList'
import BarChart from '../../components/BarChart/BarChart'
import BasicTable from '../../components/BasicTable/BasicTable'
import artistsApi from '../../mock/mock';
import './ArtistsView.css'

function ArtistsView(){
    return (
        <div className='main'>
            <DoubleListMenu />
            <ArtistList artists={artistsApi.top} />
            <div className='basic-table'>
                <BasicTable data={artistsApi.additional.popularity} label={"Esses são os dados referentes a populariade dos artistas mais ouvidos"}/>
            </div>
            <div className='title-bar-chart'>
                <h2>Esses são os gêneros musicais presentes nos seus artistas mais ouvidos</h2>
            </div>
            <BarChart data={artistsApi.additional.genres}/>
        </div>

    );
}

export default ArtistsView;