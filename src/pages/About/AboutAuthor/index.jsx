import style from '../style.module.css'
import avatar from '../../../assets/author.gif'

const AboutAuthor = ()=>{

    const {about_header,title,subtitle,avatar_style} = style;

    return(
        <>
            <div className={about_header}>
                <h1 className={title}>About Author</h1>
                <div className={avatar_style}>
                    <img src={avatar} alt="author-avatar" />
                </div>
                <p className={subtitle}>hello, my name is yardan, a frontend developer who in his daily life uses Javascript & React in building website applications.</p>
            </div>
        </>
    )
}

export default AboutAuthor