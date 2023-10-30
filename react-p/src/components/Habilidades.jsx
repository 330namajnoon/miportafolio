
import "../css/habilidades.css";
import { useContext,useState,useEffect } from "react";
import Appcontext from "../contexts/app";
import idiomas from "../idiomas";
import Habilidad from "./habilidad";
import { INITIAL_USER_DATA } from "../portfolify_api";
function Habilidades() {
    useEffect(timer,[]);
    const appcontext = useContext(Appcontext);
    const {colors} = appcontext;
    let userData = INITIAL_USER_DATA;
    userData = appcontext.userData;
    const [porsentajes,setPorsentajes] = useState(userData.SKILLS.map(s => {
        let _s = {...s};
        _s.value = 1;
        return _s;
    }));
    console.log(porsentajes);
    return ( 
        <div className="habilidades-paszamine">
            <h1 style={{color: colors[3]}}>{idiomas.habilidades[appcontext.idioma]}</h1>
            <div className="habilidades">
                {porsentajes.map((p,i)=> (    
                    <Habilidad key={i} name={p.name} porsentaje={p.value}/>
                ))}
            </div>
        </div>
     );
    
    function timer() {
        setTimeout(() => {
            setPorsentajes(userData.SKILLS)
        }, 10);
    }

}

export default Habilidades;