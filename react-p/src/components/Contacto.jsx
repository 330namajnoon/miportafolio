import "../css/contacto.css";
import Appcontext from "../contexts/app";
import idiomas  from "../idiomas";
import { useContext,useState } from "react";
import telefono from "../images/phone.png";
import email from "../images/mail.png";
import direccion from "../images/location-marker.png";
import enviar from "../images/Vector.png";
import { useRef } from "react";
import { INITIAL_USER_DATA } from "../portfolify_api";

function Contacto() {
    const appcontext = useContext(Appcontext);
    let userData = INITIAL_USER_DATA;
    userData = appcontext.userData;
    const {colors} = appcontext;
    const inputs= {
        nombre: useRef(),
        email:useRef(),
        darbare:useRef(),
        mensage:useRef()
    }

   
    
    return ( 
        <div style={{backgroundColor: colors[4]+98}} className="contacto-paszamine">
            <div className="contacto">
                <div style={{backgroundColor: colors[2]+90}} className="datos">
                    <h1 style={{color: colors[3]}}>{idiomas.contacto[appcontext.idioma].toUpperCase()}<div style={{backgroundColor: colors[3]}}></div></h1>
                    <h3 style={{color: colors[3]}}><img src={telefono} alt="" />+34 643 862 337</h3>
                    <h3 style={{color: colors[3]}}><img src={email} alt="" />sina.majnoonhjk@gmail.com</h3>
                    <h3 style={{color: colors[3]}}><img src={direccion} alt="" />Madrid , España</h3>
                    <div style={{backgroundClip: colors[3]}}></div>
                </div>
                <div style={{backgroundColor: colors[2]+40}} className="mensaje">
                    <div className="d1">
                    <div className="input">
                        <label style={{color: colors[3]}}>{idiomas.nombre[appcontext.idioma]}</label>
                        <input style={{color: colors[3], backgroundColor: colors[2]+80}} ref={inputs.nombre}  className="ip1" type="text" />
                    </div>
                    <div className="input">
                        <label style={{color: colors[3]}}>{idiomas.email[appcontext.idioma]}</label>
                        <input style={{color: colors[3], backgroundColor: colors[2]+80}} ref={inputs.email} className="ip2" type="text" />
                    </div>
                    </div>
                    <div className="input">
                        <label style={{color: colors[3]}}>{idiomas.asunto[appcontext.idioma]}</label>
                        <input style={{color: colors[3], backgroundColor: colors[2]+80}} ref={inputs.darbare} className="ip3" type="text" />
                    </div>
                    <div className="input">
                        <label style={{color: colors[3]}}>{idiomas.mensaje[appcontext.idioma]}</label>
                        <textarea style={{color: colors[3], backgroundColor: colors[2]+80}} ref={inputs.mensage}  className="ip4" name="" id="" ></textarea>
                    </div>
                    <a style={{color: colors[4], backgroundColor: colors[0]}} onClick={send} href="javascript:;"><img src={enviar} alt="" />{idiomas.enviar[appcontext.idioma]}</a>
                </div>
            </div>
        </div>
     );


     function send() {
        console.log("send");
        if (inputs.nombre.current.value != "" && inputs.mensage.current.value !== "" && inputs.email.current.value !== "") {
            let date = new Date();
            let ruz = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
            let mah = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + date.getMonth() + 1;
            let sal = date.getFullYear();
            let saat = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
            let daghighe = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
           
            appcontext.socket.emit("msg", { name: inputs.nombre.current.value, email: inputs.email.current.value, msg: inputs.mensage.current.value, date: ruz + "/" + mah + "/" + sal + " " + " " + saat + ":" + daghighe});
            
            let msg = {
                nombre:inputs.nombre.current.value,
                email:inputs.email.current.value,
                darbare:inputs.darbare.current.value,
                mensage:inputs.mensage.current.value
            }
            appcontext.socket.emit("msg",msg);
            inputs.nombre.current.value = "";
            inputs.email.current.value = "";
            inputs.darbare.current.value = "";
            inputs.mensage.current.value = "";
    
        } else {
            alert()
        }
    }
}

export default Contacto;