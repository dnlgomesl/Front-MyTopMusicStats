import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App'
import Login from './app/components/Login/Login';
import ItemList from './app/components/ItemList/ItemList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const items = [
  {
    "music": "Scene Five: Through Her Eyes",
    "artist": "Dream Theater",
    "album": "Metropolis, Pt. 2: Scenes from a Memory",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b273dbb83b10ff18df1213b76ac5",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02dbb83b10ff18df1213b76ac5",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d00004851dbb83b10ff18df1213b76ac5",
        "width": 64
      }
    ],
    "popularity": 47,
    "duration": 5.29
  },
  {
    "music": "Endless Sacrifice",
    "artist": "Dream Theater",
    "album": "Train of Thought",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2738824ff57d5ffe2ca803c8a57",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e028824ff57d5ffe2ca803c8a57",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048518824ff57d5ffe2ca803c8a57",
        "width": 64
      }
    ],
    "popularity": 43,
    "duration": 11.23
  },
  {
    "music": "Deixar o Barco Ir",
    "artist": "Dani Black",
    "album": "Dani Black",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2736344c0169282abac040cbd3d",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e026344c0169282abac040cbd3d",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048516344c0169282abac040cbd3d",
        "width": 64
      }
    ],
    "popularity": 20,
    "duration": 3.21
  },
  {
    "music": "Descanso",
    "artist": "Oficina G3",
    "album": "Histórias e Bicicletas",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2735bc4c034d9fa29daa6ec74e9",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e025bc4c034d9fa29daa6ec74e9",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048515bc4c034d9fa29daa6ec74e9",
        "width": 64
      }
    ],
    "popularity": 45,
    "duration": 5.17
  },
  {
    "music": "The Count of Tuscany",
    "artist": "Dream Theater",
    "album": "Black Clouds & Silver Linings",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2735fa53cb7507e4c55178ead5a",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e025fa53cb7507e4c55178ead5a",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048515fa53cb7507e4c55178ead5a",
        "width": 64
      }
    ],
    "popularity": 43,
    "duration": 19.17
  },
  {
    "music": "Pull Me Under",
    "artist": "Dream Theater",
    "album": "Images and Words",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b273f4d11b78efa76496f2acd618",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02f4d11b78efa76496f2acd618",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d00004851f4d11b78efa76496f2acd618",
        "width": 64
      }
    ],
    "popularity": 61,
    "duration": 8.13
  },
  {
    "music": "Lágrimas em Poças",
    "artist": "Duzz",
    "album": "Lágrimas em Poças",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2730c49f33be5aada655d551b8c",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e020c49f33be5aada655d551b8c",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048510c49f33be5aada655d551b8c",
        "width": 64
      }
    ],
    "popularity": 38,
    "duration": 3.25
  },
  {
    "music": "O Último Cristão",
    "artist": "Kivitz",
    "album": "Casa ≠ Lar",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b273da760424751bd2a8f1057f05",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02da760424751bd2a8f1057f05",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d00004851da760424751bd2a8f1057f05",
        "width": 64
      }
    ],
    "popularity": 21,
    "duration": 3.29
  },
  {
    "music": "Quem é Essa?",
    "artist": "Rodolfo Abrantes",
    "album": "Joio ou Trigo",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b2731f0b6e23a3d0bd25f08b7aab",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e021f0b6e23a3d0bd25f08b7aab",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d000048511f0b6e23a3d0bd25f08b7aab",
        "width": 64
      }
    ],
    "popularity": 33,
    "duration": 5.34
  },
  {
    "music": "The Zephyr Song",
    "artist": "Red Hot Chili Peppers",
    "album": "By the Way (Deluxe Edition)",
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4",
        "width": 640
      },
      {
        "height": 300,
        "url": "https://i.scdn.co/image/ab67616d00001e02de1af2785a83cc660155a0c4",
        "width": 300
      },
      {
        "height": 64,
        "url": "https://i.scdn.co/image/ab67616d00004851de1af2785a83cc660155a0c4",
        "width": 64
      }
    ],
    "popularity": 71,
    "duration": 3.51
  }
]
root.render(
  <React.StrictMode>
    <App />
    <ItemList items={items}/>
  </React.StrictMode>
);
