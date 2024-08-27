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

function Casa() {
    const appcontext = useContext(Appcontext);
    const [size,setSize] = useState({w:window.innerWidth,h:window.innerHeight});
    useEffect(resize,[]);
    return ( 
        <div style={{height: `${window.innerHeight}px`}} className="casa-paszamine">
            <div style={{width: `${(window.innerWidth/2)}px`,height: `${(window.innerWidth/2)}px`,left: `${(window.innerWidth/2.6)}px`,top: `${(window.innerHeight-(window.innerHeight/1.4))}px`}} className="dayere"></div>
            <img style={{height: `${(window.innerHeight/1.15)}px`,left: `${(window.innerWidth/2)}px`,top: `${(window.innerHeight-(window.innerHeight/1.15))}px`}} src={"./images/sina.png"} alt="" />
            <svg  width={window.innerWidth} height={window.innerHeight}>
                <polygon  style={{fill:"#161616"}} points={`0,0 ${(window.innerWidth/2.7)},0 ${(window.innerWidth/1.6)},${window.innerHeight} 0,${window.innerHeight}`}  />
            </svg>
            <div style={{width: `${(window.innerWidth/2.6)}px`,height:`${(window.innerHeight/1.7)}px`,top:`${(window.innerHeight/4)}px`,left: `${(window.innerWidth/25)}px`}} className="moshakhasat">
                <p className="esm">SINA MAJNOON</p>
                <div className="khat"></div>
                <div className="herfe">
                    <p className="matn">{idiomas.herfe[appcontext.idioma]}</p>
                    <p className="saye">{idiomas.herfe[appcontext.idioma]}</p>
                </div>
                <p className="joziat">{idiomas.chizikedustdaram[appcontext.idioma]}</p>
                <a href={"./images/sina-majnoon-cv.pdf"} download={"sina-majnoon-cv"} className="descargar">
                    <img src={desgargar} alt="" />
                    <p>{idiomas.descargarcv[appcontext.idioma]}</p>
                </a>
                <div className="hesabha">
                    {/* <a href=""><img src={insta} alt="" /></a> */}
                    <a href="https://github.com/330namajnoon"><img src={githup} alt="" /></a>
                    {/* <a href=""><img src={site} alt="" /></a> */}
                    <a href="https://www.linkedin.com/in/sina-majnoon/"><img src={linkedin} alt="" /></a>
                    {/* <a href=""><img src={be} alt="" /></a> */}
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