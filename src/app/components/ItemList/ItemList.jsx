import React from 'react';
import './ItemList.css'; // importando arquivo de estilos

function ItemList({items}) {
  return (
    <ul className="item-list">
      {items.map((item, idx) => (
        <li key={item.id}>
          <h2>{idx+1}</h2>
          <div className='container-infos'>
            <div className='infos'>
              <p>Música: {item.music}</p>
              <p>Artista: {item.artist}</p>
              <p>Álbum: {item.album}</p>
              <p>Duração: {item.duration}</p>
              <p>Popularidade: {item.popularity}</p>
            </div>
            <img src={item.images[1].url} alt='track' />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;