import { useContext } from "react";
import MenuContext from "../contexts/menu";
import appcontext from "../contexts/app";
function MenuOption(attributes) {
    const menucontext = useContext(MenuContext);
    const {colors} = useContext(appcontext);
    return ( 
        <div className="menuoption-paszamine">
            <div style={{backgroundColor: attributes.selected === true ? colors[0] : "transparent"}}></div>
            <a href="javascript: ;"style={{color: attributes.selected === true ? colors[0] : colors[3]}} onClick={()=>{menucontext.setOption(attributes.pageName)}}>{attributes.name}</a>
        </div>

     );
}

export default MenuOption;
