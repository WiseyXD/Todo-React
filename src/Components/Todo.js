import React from "react";

export default function Todo({text,todos,setTodos,todo,filterTodo}) {
    function deleteTodo(e)
    {
        setTodos(todos.filter((item)=> item.id !== todo.id));
    }

    function completedTodo(e)
    {
        setTodos(todos.map((item)=> {
            if(item.id === todo.id)
            {
                return{
                    ...item,completed:!item.completed
                }
            }
            return item;
        
        }))
    }
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
			<button className="complete-btn" onClick={completedTodo}>
				<i className="fas fa-check"></i>
			</button>
			<button className="trash-btn" onClick={deleteTodo}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
}
