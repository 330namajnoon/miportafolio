import "../css/informacion.css";
import { useContext } from "react";
import Appcontext from "../contexts/app";
import idiomas from "../idiomas";
import { INITIAL_USER_DATA } from "../portfolify_api";

function Informacion() {
    const appcontext = useContext(Appcontext);
    let userData = INITIAL_USER_DATA;
    userData = appcontext.userData;
    const {colors} = appcontext;
    return ( 
        <div style={{backgroundColor: colors[4]}} className="informacion-paszamine">
            <div className="informacion">
                <h1 style={{color: colors[3]}} >{idiomas.datosacademicos[appcontext.idioma]}</h1>
                {userData.ACADEMIC_DATA.map((e,index)=> (
                    <>
                        <h3 style={{color: colors[3]}} key={index}>{e.INFORMATION}</h3>
                        <p style={{color: colors[0]}} key={index}>{e.TITLE}</p>
                        {e.SKILLS.map((e,index)=> (<h2 key={index}>{e}</h2>))}
                    </>
                ))}
            </div>
            <div className="informacion">
                <h1 style={{color: colors[3]}} >{idiomas.experiencias[appcontext.idioma]}</h1>
                {userData.EXPERIENCES.map((e,indexx)=> (
                    <>
                    <h3 style={{color: colors[3]}} key={indexx}>{e.INFORMATION}</h3>
                    <p style={{color: colors[0]}} key={indexx}>{e.TITLE}</p>
                    {e.SKILLS.map((e,index)=>(<h2 key={index}>{e}</h2>))}
                    </>
                ))}
            </div>
            <div className="informacion">
                <h1 style={{color: colors[3]}} >{idiomas.idiomas[appcontext.idioma]}</h1>
                {userData.LANGUAGES.map((e,index)=>(
                    <>
                        <p style={{color: colors[0]}} className="idiomas-p" key={index}>{e.LANGUAGE} - {e.LEVEL}</p>
                    </>
                ))}
            </div>
        </div>
     );
}

export default Informacion;