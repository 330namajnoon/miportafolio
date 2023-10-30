import { useContext } from "react";
import "../css/habilidades.css";
import appcontext from "../contexts/app";


function Habilidad({name,porsentaje}) {
    const {colors} = useContext(appcontext);
    return ( 
        <div className="Habilidad-paszamine">
            <h3 style={{color: colors[3]}}>{name}</h3>
            <div style={{border: `solid .5px ${colors[1]}`}} className="darsad-p">
                <div style={{width: `${porsentaje}%`,backgroundColor: colors[0]}}></div>
            </div>
        </div>
     );
}

export default Habilidad;