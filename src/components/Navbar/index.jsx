import style from './style.module.css';
import NavItem from './NavLink';
import { useEffect, useRef } from 'react';


const Navbar = ({routeList,closeClick})=>{

    const {container, close_btn, list_container} = style
    const navRef = useRef()
    
    const navClickOutSide = (e)=> !navRef.current.contains(e.target) ? closeClick() : false

    useEffect(()=>{
        document.addEventListener('click',navClickOutSide)
        return ()=> document.removeEventListener('click',navClickOutSide)
    })

    return(
        <nav className={container} ref={navRef}>
            <button className={close_btn} onClick={closeClick}>X</button>
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
    )
}

export default Navbar