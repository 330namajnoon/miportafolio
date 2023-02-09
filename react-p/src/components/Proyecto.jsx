
import "../css/proyectos.css";
import Appcontext from "../contexts/app";
import { useContext,useState } from "react";
import idiomas from "../idiomas";
import neshanak from "../images/neshanak.png";

function Proyecto() {
    const appcontext = useContext(Appcontext);
    const [visitar,setVisitar] = useState({index:0,durum:false});
    return ( 
        <>
        {idiomas.projeha.map((e,index)=>(
            <>
                <div className="proyecto-paszamine">
                    <img src={"./images/"+e.image} alt="" />
                    <h1 key={index}>{e.nombre[appcontext.idioma]}</h1>
                    <h2 key={index}>{e.datos}</h2>
                    <div>
                        <a className="a1" href={e.codigo}>
                            {idiomas.codigo[appcontext.idioma]}
                            <img src={neshanak} alt="" />
                        </a>
                        <a onClick={()=>{visitar.durum === false ? setVisitar({index:index,durum:true}) : setVisitar({index:index,durum:false})}} className="a2" href={"javascript:;"}>{idiomas.visitar[appcontext.idioma]}</a>
                    </div>

                    <div onClick={()=>{visitar.durum === false ? setVisitar({index:index,durum:true}) : setVisitar({index:index,durum:false})}} className="visitar-paszamine" style={{display: visitar.durum === true && visitar.index === index ? "flex" : "none",flexDirection: "column",alignItems: "center",justifyContent:"center"}}>
                        <h2 className="discripcion">{e.discripcion[appcontext.idioma]}</h2>
                        {e.visitar.map((link) => (
                            <h1>{link.name}{link.name !== "" ? " : " : ""}<a  href={link.link}>{link.link}</a></h1>
                        ))}
                    </div>
                </div>
                </>
            ))}
        </>
    );
}

export default Proyecto;