import { useState } from "react";
import style from './style.module.css';
import TodoItem from "./TodoItem";


const {todo_app, todo_header, todo_input, btn_add, toggle_add , todo_list} = style


const Todo = () => {

    const [inputValue,setValue] = useState('');
    const [todoList,addTodo] = useState([
        {
            id:1,
            name:"Belajar React",
            complete:false,
            create:'12-10-2022'
        }
    ]);


    const handleSubmit = (e)=>{
        e.preventDefault();

        const value = inputValue.trim();

        if(value === ""){
            alert('Silahkan masukan aktivitas...');
            return false;
        }

        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;

        const newTodo = {
            id : todoList.length + 1,
            name : value,
            complete: false,
            create : currentDate
        }

        addTodo([newTodo,...todoList]);
        return setValue('')
    }

    const editTodo = (updateData)=>{
        const {id,name} = updateData;
        const updateTodo = todoList.map(todo => todo.id === id ? {...todo,id,name} : todo )
        return addTodo(updateTodo)
    }


    const deleteTodo = (id)=>{
        const filterTodo = todoList.filter(todo => todo['id'] !== id);
        return addTodo(filterTodo)
    }


    const toggleCompleteClick = (id)=> {
        const newTodo = todoList.map(todo => todo.id === id ? {...todo, complete : !todo.complete} : todo)
        return addTodo(newTodo);
    }

   
    return (
        <div className={todo_app}>
            <form action="#" onSubmit={handleSubmit}>
                <div className={todo_header}>
                    <input type="text" 
                        value={inputValue}
                        onChange={(e)=> setValue(e.target.value)}
                        className={todo_input} 
                        placeholder="Input your todo..." 
                    />
                    <label>
                        <input type="button" className={btn_add}/>
                        <button className={toggle_add}>+</button>
                    </label>
                </div>
            </form>
            <div className={todo_list}>
                {
                    todoList.map( todo => (
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            create={todo.create}
                            onComplete={toggleCompleteClick}
                            onEdit={editTodo}
                            onDelete={deleteTodo}
                        />
                    ))
                }
            </div>
        </div>
  );
};

export default Todo