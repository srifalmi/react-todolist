import React, { useState } from "react";

import Paper from "../COMPONENTS/Paper";
import Header from "../COMPONENTS/Header";
import TodoForm from "../COMPONENTS/TodoForm";
import Todos from "../COMPONENTS/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "AKU SIAPA?", isCompleted: false },
    { text: "nama saya falmi", isCompleted: false },
    { text: "kamu tinggal dimana?", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addedTodo);
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />
      <TodoForm addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};
export default TodoList;
