import React from 'react';
import './ItemList.css'; // importando arquivo de estilos

function ItemList({items}) {
  return (
    <ul className="item-list">
      {items.map(item => (
        <li key={item.id}>
          <img src={item.images[2].url} alt='track' />
          <div>
            <h2>track</h2>
            <p>{item.music}</p>
            <p>{item.artist}</p>
            <p>{item.album}</p>
            <p>{item.duration}</p>
            <p>{item.popularity}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;