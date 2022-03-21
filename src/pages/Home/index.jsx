import { Link } from 'react-router-dom'
import { HomeRoute } from '../../route'

import Navbar from '../../components/Navbar'
import Todo from './Todo'
import './style.css'
import { useState } from 'react'


const Home = ()=>{

    const [show,setShow] = useState(false)

    return(
        <>  
            <Navbar routeList={HomeRoute} isNavShow={show} toggleClick={()=>setShow(!show)}/>
            <Link to="/">
                <h1 className="brand-link">
                    <span className="gt-symbol">&gt;</span>
                    react-todo
                </h1>
            </Link>
            <Todo/>
        </>
    )
}

export default Home