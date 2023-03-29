import React from 'react';
import './TrackList.css'; // importando arquivo de estilos

function TrackList({tracks}) {
  return (
    <ul className="item-list">
      {tracks.map((track, idx) => (
        <li key={track.id}>
          <h2>{idx+1}</h2>
          <div className='container-infos'>
            <div className='infos'>
              <p>Música: {track.music}</p>
              <p>Artista: {track.artist}</p>
              <p>Álbum: {track.album}</p>
              <p>Duração: {track.duration}</p>
              <p>Popularidade: {track.popularity}</p>
            </div>
            <img src={track.images[1].url} alt='track' />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;