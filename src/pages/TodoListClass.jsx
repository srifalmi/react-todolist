import React from "react";

import Paper from "../COMPONENTS/paper/PaperClass";
import Header from "../COMPONENTS/header/HeaderClass";
import TodoForm from "../COMPONENTS/todoform/TodoFormClass";
import Todos from "../COMPONENTS/todos/TodosClass";

import Container from "../Layout/ContainerClass";

class TodoList extends React.Component {
  state = {
    todos: [],
    showAdd: false
  };

  componentDidMount() {
    const todoStateLocalStorage =
      JSON.parse(localStorage.getItem("todos")) || [];

    const showAddStateLocalStorage =
      JSON.parse(localStorage.getItem("showAdd")) || false;

    this.setState({
      todos: todoStateLocalStorage,
      showAdd: showAddStateLocalStorage
    });
  }
  componentDidUpdate() {
    const { todos, showAdd } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("showAdd", JSON.stringify(showAdd));
  }

  addTodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 7) {
      const addedTodo = [
        ...this.state.todos,
        { text: value, isCompleted: false }
      ];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("Only 7 Todos is allowed!");
    }
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Finish add todo before clear");
      return;
    }
    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <TodoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
