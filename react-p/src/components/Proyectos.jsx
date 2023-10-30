import "../css/proyectos.css";
import { useContext } from "react";
import Appcontext from "../contexts/app";
import Proyecto from "./Proyecto";

function Proyectos() {
    const appContect = useContext(Appcontext);
    let {colors} = appContect;
    return ( 
        <div style={{backgroundColor: colors[4]+85}} className="proyectos-paszamine">
            <div style={{backgroundColor: colors[2]+50, left:`${window.innerWidth/1.3}px`,top:`-${window.innerHeight/10}px`,width:`${window.innerHeight/1.5}px`,height:`${window.innerHeight/1.5}px`}} className="tup"></div>
            <div className="proyectos">
                <Proyecto/>
            </div>
            <div style={{backgroundColor: colors[2]+50, left:`-${window.innerWidth/20}px`,top:`${window.innerHeight/1.6}px`,width:`${window.innerHeight/1.5}px`,height:`${window.innerHeight/1.5}px`}} className="tup"></div>
        </div>
    );
}

export default Proyectos;