import React, { useState } from "react";

import useStateWithlocalStorage from "../hooks/useStateWithlocalStorage";
import Paper from "../COMPONENTS/paper/PaperClass";
import Header from "../COMPONENTS/header/Header";
import TodoForm from "../COMPONENTS/todoform/TodoFormClass";
import Todos from "../COMPONENTS/todos/Todos";

import Container from "../Layout/Container";

const TodoList = () => {
  /* const [todos, setTodos] = useState([
    { text: "AKU SIAPA?", isCompleted: false },
    { text: "nama saya falmi", isCompleted: false },
    { text: "kamu tinggal dimana?", isCompleted: false }
  ]);
  

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
*/
  const [todos, setTodos] = useStateWithlocalStorage("todos");
  const [showAdd, setShowAdd] = useState(false);
  /*
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
*/

  const addTodo = (value) => {
    if (todos.length < 7) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Only 7 Todos is allowed!");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};
export default TodoList;
