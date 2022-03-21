import { useEffect, useRef } from 'react';
import style from './style.module.css';
import NavItem from './NavLink';


const {header, btn_toggle_nav, icon, container, close_btn, list_container} = style


const Navbar = ({routeList,isNavShow,toggleClick})=>{

    const navRef = useRef()
    const navClickOutSide = (e)=>  isNavShow && !navRef.current.contains(e.target) ? toggleClick() : false

    useEffect(()=>{
        document.addEventListener('click',navClickOutSide,true)
        return ()=> document.removeEventListener('click',navClickOutSide,true)
    })

    return(
        <header className={header}>
            {
                isNavShow ? 

                <nav className={container} ref={navRef}>
                    <button className={close_btn} onClick={toggleClick}>X</button>
                    <div className={list_container}>
                        {
                            routeList.map((routes,index) => (
                                <NavItem 
                                    key={`${routes.name}+${index}`} 
                                    path={routes.route} 
                                    name={routes.name}
                                />
                            ))
                        }
                    </div>
                </nav> 
                :
                <button className={btn_toggle_nav} onClick={toggleClick}>
                    <span className={`material-icons-round ${icon}`}>menu</span>
                </button>
            }  
        </header>
    )
}

export default Navbar