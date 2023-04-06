import {useState} from "react";
import Login from "./components/Login/Login";
import TokenContext from "./contexts/Token";
import { getTopTracks } from "./services/api";
import TripleListMenu from "./components/TripleListMenu/TripleListMenu";

function App() {
  const [token, setToken] = useState({})

  return(
    <TokenContext.Provider value={{ token, setToken}}>
      <Login />
    </TokenContext.Provider>
  )
}

export default App;
