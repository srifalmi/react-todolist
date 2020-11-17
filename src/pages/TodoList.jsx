import React, { useState } from "react";

import Paper from "../COMPONENTS/Paper";
import Header from "../COMPONENTS/Header";
import TodoForm from "../COMPONENTS/TodoForm";
import Todos from "../COMPONENTS/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "AKU SIAPA?" },
    { text: "nama saya falmi" },
    { text: "kamu tinggal dimana?" }
  ]);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  console.log("todos", todos);

  return (
    <Paper>
      <Header />
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </Paper>
  );
};
export default TodoList;
