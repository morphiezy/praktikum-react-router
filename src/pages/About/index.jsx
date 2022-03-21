import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { AboutRoute } from "../../route";

import style from './style.module.css'
import avatar from '../../assets/author.gif';
import Navbar from "../../components/Navbar";
import NoMatch from "../NoMatch"


const {about_header,title,subtitle,avatar_style} = style;


const AboutApp = ()=>{
    return(
        <div className={about_header}>
            <h1 className={title}>About App</h1>
            <p className={subtitle}>REACT-TODO is an application that makes it easy for you to make a list of activities that you will do in the future, this application has several features where you can edit, add and delete your activity list</p>
            <p className={subtitle}>If you want to edit your todo , press edit then on the input form , please edit the text then press save button to end your edit.</p>
        </div>
    )
}


const AboutAuthor = ()=>{
    return(
        <div className={about_header}>
            <h1 className={title}>About Author</h1>
            <div className={avatar_style}>
                <img src={avatar} alt="author-avatar" />
            </div>
            <p className={subtitle}>Hello, my name is yardan, i'm frontend developer who in his daily life uses Javascript & React in building website applications.</p>
        </div>
    )
}


const About = ()=>{

    const [show,setShow] = useState(false)

    return(
        <>
            <Navbar routeList={AboutRoute} isNavShow={show} toggleClick={()=>setShow(!show)}/>
            <Routes>
                <Route index element={<Navigate replace to="about-app"/>}/>
                <Route path="about-app" element={<AboutApp/>}/>
                <Route path="about-author" element={<AboutAuthor/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </>
    )
}



export default About