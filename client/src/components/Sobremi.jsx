
import "../css/sobremi.css";
import idiomas from "../idiomas";
import { useContext } from "react";
import Appcontext from "../contexts/app";
function Sobremi() {
    const appcontext = useContext(Appcontext);
    return ( 
        <div className="sobremi-paszamine">
            <h1 className="s1">{idiomas.sobremi[appcontext.idioma].toUpperCase()}</h1>
            <p className="sobremi">{idiomas.sobremi[appcontext.idioma].toUpperCase()}</p>
            <div className="khat"></div>
            <p className="matn">
                {idiomas.darbareman[appcontext.idioma]}
            </p>
            <h1 className="s2">{idiomas.sobremi[appcontext.idioma].toUpperCase()}</h1>
        </div>
     );
}

export default Sobremi;