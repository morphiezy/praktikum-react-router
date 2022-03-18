import React from 'react'
import style from './style.module.css'

const {todo_header, todo_input, btn_add, toggle_add} = style

const TodoInput = React.forwardRef((props,ref)=>(
    <div className={todo_header}>
        <input type="text" ref={ref} className={todo_input} placeholder="Input your todo..." />
        <label>
            <input type="button" value="" className={btn_add}/>
            <button className={toggle_add}>+</button>
        </label>
    </div>
))


export default TodoInput