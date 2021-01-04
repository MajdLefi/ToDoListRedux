import React from 'react'
import TodoCard from './TodoCard'
import {connect} from "react-redux";

function TodoList({todoList}) {
    return (
        <div className="todoList">
           { todoList.map((el)=> (
               <TodoCard key={el.id} todo={el}/>
           ))}
        </div>
    )
};

const mapStateToProps =(state) => {
    return {
        todoList: state.todos,
    };
};

export default connect (mapStateToProps)(TodoList);
