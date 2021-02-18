import React, { useState } from "react";
import { Button } from 'reactstrap';
import { addTodo } from "../js/actions/actions";
import { connect } from "react-redux";

function AddToDo({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      text: text,
      id: Date.now(),
      isComplete: false,
    };
    addTodo(newTodo);
    setText("")
  };
  return (
    <div className="AddForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button color="primary">Add</Button>{" "}
      </form>
    </div>
  );
}

export default connect(null, { addTodo })(AddToDo);
