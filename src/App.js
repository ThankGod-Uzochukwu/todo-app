import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodosList from "./components/TodosList";


const App = () => {

  const initailState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([initailState]);
  const [editTodo, setEditTodo] = useState(null);

useEffect (() => {
  localStorage.getItem("todos", JSON.stringify(todos));
}, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header /> 
        </div>
        <div>
          <Form 
          input = {input}
          setInput = {setInput}
          todos = {todos}
          setTodos = {setTodos}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}
          />
        </div>
        <div>
          <TodosList 
          todos = {todos} 
          setTodos = {setTodos} 
          setEditTodo = {setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
