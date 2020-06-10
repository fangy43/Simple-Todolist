import React from 'react'
import './Todo.css'

function Todo({todo, toggleComplete , removeTodo}){
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    return(
        <div className='todo' >
            <input className='todoCheck' type = "checkbox" onClick={handleCheckboxClick}/>
            <li
                style={{
                    color:"white",
                    textDecoration:todo.completed ? "line-through" : null
                }}
            >
            {todo.task}
            </li>
            <button className='todoX'onClick={handleRemoveClick}>X</button>
        </div>

    )

}

export default Todo;