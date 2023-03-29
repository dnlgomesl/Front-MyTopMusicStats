import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App'
import ArtistList from './app/components/ArtistList/ArtistList';

const root = ReactDOM.createRoot(document.getElementById('root'));
const artists =  [
  {
    "artist": "Dream Theater",
    "genres": [
      "neo classical metal",
      "progressive metal"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5eb881f3d1db94c120edca60a65",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174881f3d1db94c120edca60a65",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178881f3d1db94c120edca60a65",
        "width": 160
      }
    ],
    "popularity": 62
  },
  {
    "artist": "Rodolfo Abrantes",
    "genres": [
      "adoracao",
      "brazilian gospel",
      "rock gospel brasileiro"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5ebe3373f879acf46f60aff941e",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174e3373f879acf46f60aff941e",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178e3373f879acf46f60aff941e",
        "width": 160
      }
    ],
    "popularity": 53
  },
  {
    "artist": "John Mayer",
    "genres": [
      "neo mellow",
      "singer-songwriter"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5ebe926dd683e1700a6d65bd835",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174e926dd683e1700a6d65bd835",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178e926dd683e1700a6d65bd835",
        "width": 160
      }
    ],
    "popularity": 80
  },
  {
    "artist": "Duzz",
    "genres": [
      "brazilian hip hop"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5eb8181813a737ce8cfa66ef575",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab676161000051748181813a737ce8cfa66ef575",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f1788181813a737ce8cfa66ef575",
        "width": 160
      }
    ],
    "popularity": 59
  },
  {
    "artist": "NX Zero",
    "genres": [
      "brazilian emo",
      "brazilian rock",
      "pop rock brasileiro",
      "rock alternativo brasileiro"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5eb9f26cb33eabb598942820a7b",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab676161000051749f26cb33eabb598942820a7b",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f1789f26cb33eabb598942820a7b",
        "width": 160
      }
    ],
    "popularity": 61
  },
  {
    "artist": "CantoVerbo",
    "genres": [
      "adoracao"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5eb71540892bc8b2c3e9a091561",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab6761610000517471540892bc8b2c3e9a091561",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f17871540892bc8b2c3e9a091561",
        "width": 160
      }
    ],
    "popularity": 34
  },
  {
    "artist": "Graça",
    "genres": [
      "indie cristao"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5eb756e197ee27680603a77c99c",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174756e197ee27680603a77c99c",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178756e197ee27680603a77c99c",
        "width": 160
      }
    ],
    "popularity": 6
  },
  {
    "artist": "Slipknot",
    "genres": [
      "alternative metal",
      "nu metal",
      "rap metal"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5ebec01c52d6030a1574070e308",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174ec01c52d6030a1574070e308",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178ec01c52d6030a1574070e308",
        "width": 160
      }
    ],
    "popularity": 80
  },
  {
    "artist": "UCLÃ",
    "genres": [
      "brazilian hip hop",
      "funk carioca"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5ebc61a6486789a3b93226e03b7",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174c61a6486789a3b93226e03b7",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178c61a6486789a3b93226e03b7",
        "width": 160
      }
    ],
    "popularity": 59
  },
  {
    "artist": "Marco Telles",
    "genres": [
      "adoracao",
      "indie cristao"
    ],
    "images": [
      {
        "height": 640,
        "url": "https://i.scdn.co/image/ab6761610000e5ebb7ca86c1a0ab730cb29362a9",
        "width": 640
      },
      {
        "height": 320,
        "url": "https://i.scdn.co/image/ab67616100005174b7ca86c1a0ab730cb29362a9",
        "width": 320
      },
      {
        "height": 160,
        "url": "https://i.scdn.co/image/ab6761610000f178b7ca86c1a0ab730cb29362a9",
        "width": 160
      }
    ],
    "popularity": 48
  }
]
root.render(
  <React.StrictMode>
    <App />
    <ArtistList artists={artists} />
  </React.StrictMode>
);
