import "../css/informacion.css";
import { useContext } from "react";
import Appcontext from "../contexts/app";
import idiomas from "../idiomas";

function Informacion() {
    const appcontext = useContext(Appcontext);
    return ( 
        <div className="informacion-paszamine">
            <div className="informacion">
                <h1 >{idiomas.datosacademicos[appcontext.idioma]}</h1>
                {idiomas.titulos.map((e,index)=> (
                    <>
                    <h3 key={index}>2022-Madrid Tu carrera digital</h3>
                    <p key={index}>{e.nombre[appcontext.idioma]}</p>
                    {e.datos[appcontext.idioma].map((e,index)=> (<h2 key={index}>{e}</h2>))}
                    </>
                ))}
            </div>
            <div className="informacion">
                <h1 >{idiomas.experiencias[appcontext.idioma]}</h1>
                {idiomas.trabajos.map((e,indexx)=> (
                    <>
                    <h3 key={indexx}>{e.fecha[appcontext.idioma]}</h3>
                    <p key={indexx}>{e.nombre[appcontext.idioma]}</p>
                    {e.datos[appcontext.idioma].map((e,index)=>(<h2 key={index}>{e}</h2>))}
                    </>
                ))}
            </div>
            <div className="informacion">
                <h1>{idiomas.idiomas[appcontext.idioma]}</h1>
                {idiomas.zabanha.map((e,index)=>(
                    <>
                        <p className="idiomas-p" key={index}>{e.idioma[appcontext.idioma]} - {e.nivel[appcontext.idioma]}</p>
                    </>
                ))}
            </div>
        </div>
     );
}

export default Informacion;