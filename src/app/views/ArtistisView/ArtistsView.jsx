import * as React from 'react';
import ArtistList from '../../components/ArtistList/ArtistList'
import BarChart from '../../components/BarChart/BarChart'
import BasicTable from '../../components/BasicTable/BasicTable'
import './ArtistsView.css'

function ArtistsView({artists}){
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

export default ArtistsView;