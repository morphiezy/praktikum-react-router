import { NavLink } from "react-router-dom";
import style from './style.module.css'

const NavItem = ({path,name})=>{

    const {nav_item,active} = style;
    
    return(
        <NavLink end to={path} className={({isActive})=> nav_item + (isActive ? ` ${active}` : "")}>
            {name}
        </NavLink>
    )
}

export default NavItem