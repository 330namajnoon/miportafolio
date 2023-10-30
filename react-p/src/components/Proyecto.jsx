
import "../css/proyectos.css";
import Appcontext from "../contexts/app";
import { useContext, useState } from "react";
import idiomas from "../idiomas";
import neshanak from "../images/neshanak.png";
import { INITIAL_USER_DATA } from "../portfolify_api";

function Proyecto() {
    const appcontext = useContext(Appcontext);
    let userData = INITIAL_USER_DATA;
    userData = appcontext.userData;
    const { colors } = appcontext;
    const [visitar, setVisitar] = useState({ index: 0, durum: false });
    return (
        <>
            {userData.PROJECTS.map((e, index) => (
                <>
                    <div style={{backgroundColor: colors[2]+50}} className="proyecto-paszamine">
                        <img src={e.IMAGE} alt="" />
                        <h1 style={{color: colors[3]}} key={index}>{e.NAME}</h1>
                        <h2 style={{color: colors[3]}} key={index}>{e.TITLE}</h2>
                        <div>
                            {e.URLS.filter((u) => u.TYPE === "C").map((e, i) => (

                                <a style={{color: colors[3]}} key={i} className="a1" href={e.URL}>
                                    {e.NAME}
                                    <img src={neshanak} alt="" />
                                </a>
                            ))}
                            <a style={{backgroundColor: colors[0], color: colors[4]}} onClick={() => { visitar.durum === false ? setVisitar({ index: index, durum: true }) : setVisitar({ index: index, durum: false }) }} className="a2" href={"javascript:;"}>{idiomas.visitar[appcontext.idioma]}</a>
                        </div>

                        <div onClick={() => { visitar.durum === false ? setVisitar({ index: index, durum: true }) : setVisitar({ index: index, durum: false }) }} className="visitar-paszamine" style={{ display: visitar.durum === true && visitar.index === index ? "flex" : "none", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <h2 className="discripcion">{e.DESCRIPTION}</h2>
                            {e.URLS.filter((u) => u.TYPE === "W").map((e, i) => (
                                <h1 key={i}>{e.NAME}{e.NAME !== "" ? " : " : ""}<a key={i} href={e.URL}>{e.URL}</a></h1>
                            ))}
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}

export default Proyecto;