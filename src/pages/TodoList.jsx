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

  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};
export default TodoList;
