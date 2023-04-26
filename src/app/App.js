import {useState} from "react";
import Login from "./components/Login/Login";
import TripleListMenu from "./components/TripleListMenu/TripleListMenu";

import TokenContext from "./contexts/Token";
import TypeContext from "./contexts/Type";
import LimitContext from "./contexts/Limit";
import RangeContext from "./contexts/Range";
import OrderContext from "./contexts/Order";

import Tracks from "./views/TracksView/Tracks";
import Artists from "./views/ArtistsView/Artists";


function App() {
  const [token, setToken] = useState(null)
  const [limit, setLimit] = useState({})
  const [range, setRange] = useState({})
  const [type, setType] = useState({})
  const [order, setOrder] = useState({})

  return(
    <TokenContext.Provider value={{token, setToken}}>
      <Login />
      <OrderContext.Provider value={{order, setOrder}}>
        <TypeContext.Provider value={{type, setType}}>
          <LimitContext.Provider value={{limit, setLimit}}>
            <RangeContext.Provider value={{range, setRange}}>
              <TripleListMenu />
              <Tracks />
              <Artists />
            </RangeContext.Provider>
          </LimitContext.Provider>
        </TypeContext.Provider>  
      </OrderContext.Provider> 
    </TokenContext.Provider>
  )
}

export default App;
