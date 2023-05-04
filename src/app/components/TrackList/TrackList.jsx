import React from 'react';
import "../Util/ItemList.css";
import logos from '../../static/Spotify_Logo_CMYK_White.png';


function TrackList({tracks}) {
  return (
    <ul className="item-list">
      {tracks.map((track, idx) => (
        <li key={track.id}>
          <h2>{idx+1}</h2>
          <div className='container-infos'>
            <div className='infos'>
            <div className='url-img'>
                <img src={logos} alt="logo-spotify" />
              </div>
              <p>Música: {track.music}</p>
              <p>Artista: {track.artist}</p>
              <p>Álbum: {track.album}</p>
              <p>Duração: {track.duration}</p>
              <p>Popularidade: {track.popularity}</p>
              <div className='url-img'>
                <a href={track.url}>Link to Spotify</a>
              </div>
            </div>
            <img src={track.images[1].url} alt='track' />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TrackList;