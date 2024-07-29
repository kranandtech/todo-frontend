import React, { useEffect, useState } from "react";
import useGetTodo from "../hooks/useGetTodo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const { todo, getTodo } = useGetTodo();
  const [todos, setTodos] = useState(todo);

  useEffect(() => {
    setTodos(todo);
  }, [todo]);

  const handleAddTodo = async () => {
    await getTodo(); // Re-fetch the todos
  };

  return (
    <div>
      <TodoForm onAddTodo={handleAddTodo} />
      {todos.map((elem) => (
        <p key={elem._id}>{elem.title}</p>
      ))}
    </div>
  );
};

export default TodoList;
