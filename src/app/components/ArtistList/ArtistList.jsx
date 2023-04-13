import React from 'react';
import './ArtistList.css'; // importando arquivo de estilos
import logos from '../../static/Spotify_Logo_CMYK_White.png'

function ArtistList({artists}) {
  return (
    <ul className="item-list">
      {artists.map((artist, idx) => (
        <li key={artist.id}>
          <h2>{idx+1}</h2>
          <div className='container-infos'>
            <div className='infos'>
              <div className='url-img'>
                <img src={logos} alt="logo-spotify" />
              </div>
              <p>Artista: {artist.artist}</p>
              <p>Gêneros: {artist.genres.join(", ")}</p>
              <p>Popularidade: {artist.popularity}</p>
              <div className='url-img'>
                <a href={artist.url}>Link to Spotify</a>
              </div>
            </div>
            <img src={artist.images[1].url} alt='track'/>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;