import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { removeTodo, completeTodo,editTodo } from "../js/actions/actions";
import EditForm from  "../Components/EditForm"

const TodoCard = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo-card">
      <p
        style={
          todo.isCompleted
            ? { textDecoration: "line-through", opacity: "0.3" }
            : {}
        }
      >
        {todo.text}
      </p>
      <div>
        <Button onClick={() => completeTodo(todo.id)}>
          {todo.isCompleted ? "Completed" : "INCOMPLETED"}
        </Button>{" "}
        <Button color="danger" onClick={() => removeTodo(todo.id)}>
          Delete
        </Button>{" "}
        <EditForm oldTodo={todo}/>
      </div>
    </div>
  );
}

export default connect(null, {removeTodo, completeTodo, editTodo })(TodoCard);
