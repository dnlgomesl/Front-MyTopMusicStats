import * as React from 'react';
import TripleListMenu from '../../components/TripleListMenu/TripleListMenu';
import ArtistList from '../../components/ArtistList/ArtistList'
import BarChart from '../../components/BarChart/BarChart'
import BasicTable from '../../components/BasicTable/BasicTable'
import artistsApi from '../../mock/mockArtists';
import './ArtistsView.css'

function ArtistsView(){
    return (
        <div className='main'>
            <TripleListMenu />
            <div className='artist-list'>
                <h2>Esses são os artistas mais ouvidos por você</h2>
                <ArtistList artists={artistsApi.top} />
            </div>
            <div className='basic-table'>
                <BasicTable data={artistsApi.additional.popularity} label={"Esses são os dados referentes a populariade dos artistas mais ouvidos por você"}/>
            </div>
            <BarChart data={artistsApi.additional.genres} title={"Esses são os gêneros musicais presentes nos seus artistas mais ouvidos por você"}/>
        </div>

    );
}

export default ArtistsView;