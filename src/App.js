import React from "react";
import "./styles.css";

import Paper from "./COMPONENTS/Paper";
import Header from "./COMPONENTS/Header";
import TodoForm from "./COMPONENTS/TodoForm";
import Todos from "./COMPONENTS/Todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
}
