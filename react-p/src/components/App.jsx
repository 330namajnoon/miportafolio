
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
import Portfolify_API,{INITIAL_USER_DATA , } from "../portfolify_api";

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
    const [loading,setLoading] = useState(true);
    const [userData, setUserData] = useState(INITIAL_USER_DATA);
    const [colors, setColors] = useState([]);
    const [font, setFont] = useState("");
    const [size,setSize] = useState({w:window.innerWidth,h:window.innerHeight});
    const [page,setPage] = useState(<Casa />);
    const [idioma,setIdioma] = useState("ingles");
    useEffect(resize,[]);
    useEffect(()=> {
        const portfolify = new Portfolify_API();
        portfolify.getData(window.location.search.split("=")[1]).then((res)=> {
            setUserData(portfolify.getUserData());
            setColors(portfolify.getColors());
            setFont(portfolify.getFont());
            setLoading(false);
        }).catch(res => {
            console.log(res);
        });

    },[]);

    return (
        <>
            {!loading ?
                <AppContext.Provider value={{pageChenged,idioma,socket,userData,colors,font}} >
                    <div  className="paszamine">
                        {/* <select onChange={(e)=> {setIdioma(e.target.value)}}>
                            <option value="ingles">English</option>
                            <option value="espanol">Español</option>
                        </select> */}
                        <Menu/>
                        {page}
                    </div>
                </AppContext.Provider>
                : <h1>Loading</h1>
            } 
        </>
      
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
