import "../css/proyectos.css";
import { useContext } from "react";
import Appcontext from "../contexts/app";
import Proyecto from "./Proyecto";

function Proyectos() {
    return ( 
        <div className="proyectos-paszamine">
            <div style={{left:`${window.innerWidth/1.3}px`,top:`-${window.innerHeight/10}px`,width:`${window.innerHeight/1.5}px`,height:`${window.innerHeight/1.5}px`}} className="tup"></div>
            <div className="proyectos">
                <Proyecto/>
            </div>
            <div style={{left:`-${window.innerWidth/20}px`,top:`${window.innerHeight/1.6}px`,width:`${window.innerHeight/1.5}px`,height:`${window.innerHeight/1.5}px`}} className="tup"></div>
        </div>
    );
}

export default Proyectos;