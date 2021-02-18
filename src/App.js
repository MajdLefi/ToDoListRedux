import React from "react";
import './App.css';
import AddToDo from './Components/AddToDo';
import EditForm from "./Components/EditForm";
import TodoList from './Components/TodoList';
import NavBar from '../src/Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AddToDo/>
      <TodoList/>
    </div>
  );
}

export default App;
