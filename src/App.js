import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]= useState([]);
	return(
    <>
    <header>
      <h1>Aryan's Todo List</h1>
    </header>
    <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos}/>
    </>
    )
}

export default App;
