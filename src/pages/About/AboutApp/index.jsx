import style from '../style.module.css'

const AboutApp = ()=>{

    const {about_header,title,subtitle} = style;

    return(
        <div className={about_header}>
            <h1 className={title}>About App</h1>
            <p className={subtitle}>REACT-TODO is an application that makes it easy for you to make a list of activities that you will do in the future, this application has several features where you can edit, add and delete your activity list</p>
        </div>
    )
}

export default AboutApp 