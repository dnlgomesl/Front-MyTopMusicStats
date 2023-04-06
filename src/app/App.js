import {useState} from "react";
import Login from "./components/Login/Login";
import TripleListMenu from "./components/TripleListMenu/TripleListMenu";

import TokenContext from "./contexts/Token";
import TypeContext from "./contexts/Type";
import LimitContext from "./contexts/Limit";
import RangeContext from "./contexts/Range";

function App() {
  const [token, setToken] = useState({})
  const [limit, setLimit] = useState({})
  const [range, setRange] = useState({})
  const [type, setType] = useState({})

  return(
    <TokenContext.Provider value={{token, setToken}}>
      <Login />
      <TripleListMenu/>
    </TokenContext.Provider>
  )
}

export default App;
