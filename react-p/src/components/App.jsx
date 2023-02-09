
import "../css/app.css";
import React,{useContext,useRef,useState,useEffect} from "react";
import AppContext from "../contexts/app"; 
import Casa from "./Casa";
import Sobremi from "./Sobremi";
import Menu from "./Menu";
import Habilidades from "./Habilidades";
import Informacion from "./informacion";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import idiomas from "../idiomas";
import {io} from "socket.io-client";

// const socket = io("https://hollow-outgoing-dragon.glitch.me");
const socket = io("http://localhost:4000");
function App() {
    socket.emit("bazdid");
    const pages = {
        casa: <Casa />,
        sobremi: <Sobremi />,
        habilidades: <Habilidades/>,
        informacion: <Informacion/>,
        proyectos: <Proyectos/>,
        contacto: <Contacto/>
    }
    const [size,setSize] = useState({w:window.innerWidth,h:window.innerHeight});
    const [page,setPage] = useState(<Casa />);
    const [idioma,setIdioma] = useState("ingles");
    useEffect(resize,[]);
    return ( 
        <AppContext.Provider value={{pageChenged,idioma,socket}} >
            <div  className="paszamine">
                <select onChange={(e)=> {setIdioma(e.target.value)}}>
                    <option value="ingles">English</option>
                    <option value="espanol">Español</option>
                    {/* <option value="turco">Türkçe</option> */}
                </select>
                <Menu/>
                {page}
            </div>
        </AppContext.Provider>
      
     );


     function resize() {
        window.addEventListener("resize",()=> {
            setSize({w:window.innerWidth,h:window.innerHeight});
        })
     }

     function pageChenged(pageName) {
        setPage(pages[pageName]);
        console.log(pageName);
     }

    

 
}

export default App;
