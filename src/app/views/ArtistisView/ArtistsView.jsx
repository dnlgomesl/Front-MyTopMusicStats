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
            <div className='artist-list'>
                <h2>Esses são seus artistas mais ouvidos</h2>
                <ArtistList artists={artistsApi.top} />
            </div>
            <div className='basic-table'>
                <BasicTable data={artistsApi.additional.popularity} label={"Esses são os dados referentes a populariade dos artistas mais ouvidos"}/>
            </div>
            <BarChart data={artistsApi.additional.genres} title={"Esses são os gêneros musicais presentes nos seus artistas mais ouvidos"}/>
        </div>

    );
}

export default ArtistsView;