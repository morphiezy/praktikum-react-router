import style from './style.module.css'

const TodoItem = ({id,name,create,completeClick,editClick,deleteClick})=>{

    const {
        todo_item,
        wrapper,
        toggle_checkbox,
        toggle_complete,
        todo_info,
        title,
        subtitle,
        todo_tools,
        btn_edit,
        btn_delete
    } = style;

    return(
        <div className={todo_item}>
            <label className={wrapper}>
                <input type="checkbox" onChange={()=>completeClick(id)} className={toggle_complete}/>
                <span className={toggle_checkbox}></span>
                <div className={todo_info}>
                    <span className={title} title={name}>
                        {name}
                    </span>
                    <span className={subtitle}>Added on {create}</span>
                </div>
            </label>
            <div className={todo_tools}>
                <button className={btn_edit} onClick={()=>editClick(id)}>edit</button>
                <button className={btn_delete} onClick={()=>deleteClick(id)}>delete</button>
            </div>
        </div>
    )
}

export default TodoItem