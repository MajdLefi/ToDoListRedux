import React from "react";
import './App.css';
import AddToDo from './Components/AddToDo';
import EditForm from "./Components/EditForm";
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <AddToDo/>
      <TodoList/>
    </div>
  );
}

export default App;
