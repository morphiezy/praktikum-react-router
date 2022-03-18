import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import AboutApp from "./AboutApp"
import AboutAuthor from "./AboutAuthor"

const About = ()=> <Outlet/>

export default [
    About,
    AboutApp,
    AboutAuthor
]    