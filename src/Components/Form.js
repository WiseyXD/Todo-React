import React from "react";

function Form({setInputText , inputText ,todos,setTodos}) {
    function setTextValue(e)
    {
        setInputText(e.target.value);
    }

    function addTodo(e)
    {
        e.preventDefault();
        setTodos([...todos,{
            text : inputText,
            id: Math.random()*1000,
            completed:false
        }]);
        setInputText("");
    }
    return(
        <>
            <form>
      <input value={inputText} type="text" className="todo-input" onChange={setTextValue}/>
      <button className="todo-button" type="submit" onClick={addTodo}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </>
    )
}

export default Form;
