import React from "react";
import Todo from "./Todo";
export default function TodoList({todos , setTodos})
{
    return(
        <>
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>{
                    return(
                        <Todo key={todo.id} text = {todo.text} todos={todos} setTodos={setTodos} todo={todo}/>
                    )
                        
                    
                })}
            </ul>
        </div>
        </>
    )
}