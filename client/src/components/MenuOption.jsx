import { useContext } from "react";
import MenuContext from "../contexts/menu";
function MenuOption(attributes) {
    const menucontext = useContext(MenuContext);
    return ( 
        <div className="menuoption-paszamine">
            <div style={{backgroundColor: attributes.selected === true ? "#F3DB06" : "transparent"}}></div>
            <a href="javascript: ;"style={{color: attributes.selected == true ? "#F3DB06" : "#ffffff"}} onClick={()=>{menucontext.setOption(attributes.pageName)}}>{attributes.name}</a>
        </div>

     );
}

export default MenuOption;
