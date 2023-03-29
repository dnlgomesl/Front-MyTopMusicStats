import React from 'react';
import './ArtistList.css'; // importando arquivo de estilos

function ArtistList({artists}) {
  return (
    <ul className="item-list">
      {artists.map((artist, idx) => (
        <li key={artist.id}>
          <h2>{idx+1}</h2>
          <div className='container-infos'>
            <div className='infos'>
              <p>Artista: {artist.artist}</p>
              <p>Gêneros: {artist.genres.join(", ")}</p>
              <p>Popularidade: {artist.popularity}</p>
            </div>
            <img src={artist.images[1].url} alt='track' />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ArtistList;