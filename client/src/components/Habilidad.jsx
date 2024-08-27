import "../css/habilidades.css";


function Habilidad({name,porsentaje}) {
    return ( 
        <div className="Habilidad-paszamine">
            <h3>{name}</h3>
            <div className="darsad-p">
                <div style={{width: `${porsentaje}%`}}></div>
            </div>
        </div>
     );
}

export default Habilidad;