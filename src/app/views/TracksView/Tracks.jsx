import {useContext} from "react";
import TokenContext from "../../contexts/Token";
import TypeContext from "../../contexts/Type";
import LimitContext from "../../contexts/Limit";
import RangeContext from "../../contexts/Range";

import TracksView from "./TracksView";

const Tracks = () => {
    const {token, setToken} = useContext(TokenContext)
    const {range, setRange} = useContext(RangeContext);
    const {limit, setLimit} = useContext(LimitContext);
    const {type, setType} = useContext(TypeContext);

    if (!!token && typeof limit == "string" && typeof range == "string" && type == 'Músicas') {
        return <TracksView />
    }
}

export default Tracks;