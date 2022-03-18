import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'


const Home = ()=>{

    const [todoList,addTodo] = useState([]);
    const [edit,setEdit] = useState({})

    const inputRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
 
        const formInput = inputRef.current;
        
        if(formInput.value.trim() === ""){
            alert('Silahkan masukan aktivitas...');
            return false;
        }

        const date = new Date();
        const currentDate = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
        const {id,status} = edit;

        /* Conditional for Edit Todo & Add Todo */

        if(status){
            const inputValue = inputRef.current.value;
            const updateTodo = todoList.map(todo =>{
                return todo.id !== id ? todo : {...todo,name:inputValue,create:currentDate}
            })

            addTodo(updateTodo)
            setEdit({})
        }
        else{
            const newTodo = {
                id : todoList.length + 1,
                name : inputRef.current.value.trim(),
                complete: false,
                create : currentDate
            }
    
            addTodo([newTodo,...todoList]);
        }

        return inputRef.current.value = '';
    }

    const editTodo = (id)=>{
        const todoValue = todoList.filter(todo => todo.id === id ? todo.name : '')[0]['name'];
        inputRef.current.value = todoValue
        inputRef.current.focus();
        setEdit({id,status:true})
    }

    const deleteTodo = (id)=>{
        const filterTodo = todoList.filter(todo => todo['id'] !== id);
        return addTodo(filterTodo)
    }

    const toggleCompleteClick = (id)=> {
        const newTodo = todoList.map(todo => todo.id === id ? {...todo, complete : !todo.complete} : todo)
        return addTodo(newTodo);
    }


    return(
        <>   
            <Link to="/">
                <h1 className="brand-link">
                    <span className="gt-symbol">&gt;</span>
                    react-router
                </h1>
            </Link>
            <div className="todo_app">
                <form action="#" onSubmit={handleSubmit}>
                    <TodoInput ref={inputRef}/>
                </form>
                <div className="todo-list">
                    {
                        todoList.map(todo => <TodoItem 
                                                key={todo.id} 
                                                id={todo.id} 
                                                name={todo.name} 
                                                create={todo.create}
                                                completeClick={toggleCompleteClick}
                                                editClick={editTodo}
                                                deleteClick={deleteTodo}
                                            /> 
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home