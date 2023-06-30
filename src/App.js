import { useState , useEffect} from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos]= useState([]);
  const [filter,setFilter]= useState("all");
  const [filterTodo,setFilterTodo] = useState([]);

  useEffect(()=>{
    getLocalTodo();
  },[]);


  useEffect(()=>{
    filterHandler();
    saveLocalTodo();
  },[todos,filter]);

  function saveLocalTodo()
  {
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  function getLocalTodo()
  {
    if(localStorage.getItem("todos")===null)
    {
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    else
    {
      let localTodo =JSON.parse(localStorage.getItem("todos"));
      if(localTodo.length===0)
      {
        return null;
      }
      setTodos(localTodo);
    }
    
  }

  function filterHandler()
  {
    switch(filter){
      case "completed" : setFilterTodo(todos.filter((todo)=> todo.completed===true));
      break;
      case "uncompleted" : setFilterTodo(todos.filter((todo)=> todo.completed===false));
      break; 
      default : setFilterTodo(todos);
      break;
    }
  }
	return(
    <main>
    <header>
      <h1>Aryan's Todo List</h1>
    </header>
    <Form setInputText={setInputText} inputText={inputText} todos={todos} setTodos={setTodos} setFilter={setFilter}/>
    <TodoList todos={todos} setTodos={setTodos} filterTodo={filterTodo}/>
    </main>
    )
}

export default App;
