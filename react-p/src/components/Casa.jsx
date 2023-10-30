import "../css/casa.css";
import sina from "../images/sina.png";
import desgargar from "../images/descargar.png";
import insta from "../images/insta.png";
import githup from "../images/githup.png";
import site from "../images/site.png";
import linkedin from "../images/linkedin.png";
import be from "../images/be.png";
import {useState, useEffect ,useContext} from "react";
import idiomas from "../idiomas";
import Appcontext from "../contexts/app";
import { INITIAL_USER_DATA } from "../portfolify_api";

function Casa() {
    const appcontext = useContext(Appcontext);
    let userData = INITIAL_USER_DATA;
    userData = appcontext.userData;
    const {colors,font} = appcontext;
    const [size,setSize] = useState({w:window.innerWidth,h:window.innerHeight});
    useEffect(resize,[]);
    return ( 
        <div style={{height: `${window.innerHeight}px`,backgroundColor:colors[2]}} className="casa-paszamine">
            <div style={{width: `${(window.innerWidth/2)}px`,height: `${(window.innerWidth/2)}px`,left: `${(window.innerWidth/2.6)}px`,top: `${(window.innerHeight-(window.innerHeight/1.4))}px`,border:`solid 8px ${colors[0]}`,boxShadow:`0 0 100px .1px ${colors[0]} , inset 0 0 100px .1px ${colors[0]}`}} className="dayere"></div>
            <img style={{height: `${(window.innerHeight/1.15)}px`,left: `${(window.innerWidth/2)}px`,top: `${(window.innerHeight-(window.innerHeight/1.15))}px`}} src={sina} alt="" />
            <svg  width={window.innerWidth} height={window.innerHeight}>
                <polygon  style={{fill:colors[4]}} points={`0,0 ${(window.innerWidth/2.7)},0 ${(window.innerWidth/1.6)},${window.innerHeight} 0,${window.innerHeight}`}  />
            </svg>
            <div style={{width: `${(window.innerWidth/2.6)}px`,height:`${(window.innerHeight/1.7)}px`,top:`${(window.innerHeight/4)}px`,left: `${(window.innerWidth/25)}px`}} className="moshakhasat">
                <p style={{color:colors[0]}} className="esm">{userData.NAME} {userData.LAST_NAME_1} {userData.LAST_NAME_2}</p>
                <div style={{backgroundColor:colors[0]}} className="khat"></div>
                <div className="herfe">
                    <p style={{color: colors[3]}} className="matn">{userData.TITLE}</p>
                    <p style={{color: colors[4]+30}} className="saye">{userData.TITLE}</p>
                </div>
                <p style={{color: colors[1]}} className="joziat">{userData.DESCRIPTION}</p>
                <a href={userData.CV_URL} download={userData.CV_URL} className="descargar">
                    <img src={desgargar} alt="" />
                    <p style={{color: colors[3]}}>{idiomas.descargarcv[appcontext.idioma]}</p>
                </a>
                <div className="hesabha">
                    {userData.PLATFORMS.map((p,i)=> (
                        <a key={i} href={p.URL}><img src={p.ICON} alt="" /></a>
                    ))}
                </div>
            </div>
        </div>
     );

     function resize() {
        window.addEventListener("resize",()=> {
            setSize({w:window.innerWidth,h:window.innerHeight});
      
        })
     }

    
    


     
}

export default Casa;