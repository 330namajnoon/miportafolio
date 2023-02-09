
import "../css/habilidades.css";
import { useContext,useState,useEffect } from "react";
import Appcontext from "../contexts/app";
import idiomas from "../idiomas";
import Habilidad from "./habilidad";
function Habilidades() {
    useEffect(timer,[]);
    const appcontext = useContext(Appcontext);
    const [porsentajes,setPorsentajes] = useState({
        javascript:1,
        nodejs:1,
        reactjs:1,
        threejs:1,
        html:1,
        css:1,
        jsp:1,
        php:1,
        java:1,
        mysql:1,
        blender:1,
        figma:1
    })
    return ( 
        <div className="habilidades-paszamine">
            <h1>{idiomas.habilidades[appcontext.idioma]}</h1>
            <div className="habilidades">
                <Habilidad name="Javascript" porsentaje={porsentajes.java}/>
                <Habilidad name="NodeJS" porsentaje={porsentajes.nodejs}/>
                <Habilidad name="ReactJS" porsentaje={porsentajes.reactjs}/>
                <Habilidad name="ThreeJS" porsentaje={porsentajes.threejs}/>
                <Habilidad name="HTML" porsentaje={porsentajes.html}/>
                <Habilidad name="CSS" porsentaje={porsentajes.css}/>
                <Habilidad name="JSP" porsentaje={porsentajes.jsp}/>
                <Habilidad name="PHP" porsentaje={porsentajes.php}/>
                <Habilidad name="JAVA" porsentaje={porsentajes.java}/>
                <Habilidad name="MYSQL" porsentaje={porsentajes.mysql}/>
                <Habilidad name="Blender" porsentaje={porsentajes.blender}/>
                <Habilidad name="Figma" porsentaje={porsentajes.figma}/>
              
            </div>
        </div>
     );
    
    function timer() {
        setTimeout(() => {
            setPorsentajes(
                {
                    javascript:95,
                    nodejs:85,
                    reactjs:80,
                    threejs:80,
                    html:90,
                    css:90,
                    jsp:90,
                    php:90,
                    java:70,
                    mysql:85,
                    blender:95,
                    figma:85
                }
            )
        }, 10);
    }

}

export default Habilidades;