import { Link } from "react-router-dom"
import './style.css'
import illustration from '../../assets/illustration.png'

const NoMatch = ()=>{
    return(
        <div className="container-not-match">
            <img src={illustration} alt="illustration" className="illustration"/>
            <h1 className="title">404</h1>
            <p className="subtitle">The page could not be found</p>
            <Link to='/'>
                <button className="btn-navigate">Back to home</button>
            </Link>
        </div>
    )
}

export default NoMatch