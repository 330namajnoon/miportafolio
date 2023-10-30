
import "../css/sobremi.css";
import idiomas from "../idiomas";
import { useContext } from "react";
import Appcontext from "../contexts/app";
import { INITIAL_USER_DATA } from "../portfolify_api";
function Sobremi() {
    const appcontext = useContext(Appcontext);
    let userData = INITIAL_USER_DATA;
    userData = appcontext.userData;
    const {colors} = appcontext;
    return ( 
        <div className="sobremi-paszamine">
            <h1 style={{color: colors[2]+70}} className="s1">{idiomas.sobremi[appcontext.idioma].toUpperCase()}</h1>
            <p className="sobremi">{idiomas.sobremi[appcontext.idioma].toUpperCase()}</p>
            <div style={{backgroundColor: colors[0]}} className="khat"></div>
            <p style={{color: colors[1]}} className="matn">
                {userData.ABOUT_ME}
            </p>
            <h1 style={{color: colors[2]+70}} className="s2">{idiomas.sobremi[appcontext.idioma].toUpperCase()}</h1>
        </div>
     );
}

export default Sobremi;