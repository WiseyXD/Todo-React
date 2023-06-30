import React from "react";
import Todo from "./Todo";
export default function TodoList({todos , setTodos,filterTodo})
{
    return(
        <>
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodo.map((todo)=>{
                    return(
                        <Todo key={todo.id} text = {todo.text} todos={todos} setTodos={setTodos} todo={todo} filterTodo={filterTodo}/>
                    )
                        
                    
                })}
            </ul>
        </div>
        </>
    )
}