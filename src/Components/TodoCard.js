import React from 'react'
import {connect} from "react-redux"
import {editTodo,removeTodo,completeTodo} from "../js/actions/actions";
import Bv from "../Components/Bv"
import EditForm from './EditForm';

function TodoCard({todo,removeTodo,completeTodo}) {
    return (
        <div className="todo-card">
            <p
            style ={todo.isCompleted ? {textDecoration:"line-through",opacity:"0.3" }: {}}
            >{todo.text}</p>
            <div>
                <button onClick={()=>completeTodo(todo.id)}>{todo.isCompleted ? "Completed" : "INCOMPLETED"}</button>
                <button onClick={()=>removeTodo(todo.id)}>Delete</button>
                <Bv/>
                
            </div>   
        </div>
    )
}

export default connect (null, {editTodo,removeTodo,completeTodo})(TodoCard);