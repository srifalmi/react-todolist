import React from "react";

import Paper from "../COMPONENTS/Paper";
import Header from "../COMPONENTS/Header";
import TodoForm from "../COMPONENTS/TodoForm";
import Todos from "../COMPONENTS/Todos";

const TodoList = () => {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};
export default TodoList;
