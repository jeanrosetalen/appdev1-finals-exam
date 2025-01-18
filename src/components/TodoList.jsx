import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");


  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <TodoForm
      addTodo={addTodo}
      newTodo={newTodo}
      setNewTodo={setNewTodo} 
      />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            
            <span onClick={() => toggleComplete(todo.id)}
                style={{ textDecoration: todo.completed ? "Line-through": "none", cursor: "pointer"}}>
                    {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;