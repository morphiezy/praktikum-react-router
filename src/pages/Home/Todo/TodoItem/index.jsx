import { useState, useRef, useEffect } from 'react'
import style from './style.module.css'

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


const TodoItem = ({id,name,create,onComplete,onEdit,onDelete})=>{

    const [todoValue,setTodoValue] = useState(name)
    const [disable,setDisable] = useState(true)

    const inputRef = useRef();

    const btnEditClick = (btn,id)=>{
        const text = btn.textContent;
        
        if(text === 'edit') return setDisable(false)
        else if(text === 'save !') onEdit({id,name:todoValue})
        return setDisable(true)
    }  

    useEffect(()=>{
        if(inputRef.current && !disable) inputRef.current.focus();
    },[disable])
    

    return(
        <div className={todo_item}>
            <label className={wrapper}>
                <input type="checkbox" onChange={()=>onComplete(id)} className={toggle_complete}/>
                <span className={toggle_checkbox}></span>
                <div className={todo_info}>
                    <input 
                        className={title}
                        ref={inputRef} 
                        value={todoValue}  
                        disabled={disable}
                        onChange={(e)=>setTodoValue(e.target.value)}
                    />
                    <span className={subtitle}>Added on {create}</span>
                </div>
            </label>
            <div className={todo_tools}>
                <button className={btn_edit} onClick={(e)=>btnEditClick(e.target,id)}>
                    {disable ? 'edit' : 'save !'}
                </button>
                <button className={btn_delete} onClick={()=>onDelete(id)}>delete</button>
            </div>
        </div>
    )
}

export default TodoItem