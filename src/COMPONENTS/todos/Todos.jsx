/**  @jsx jsx */
import { jsx } from "@emotion/react";

//import React from "react";
import PropTypes from "prop-types";
import * as styles from "./todos.styles";

//import styles from "./todos.module.css";
import Container from "../../Layout/Container";

import Todo from "../todo/TodoClass";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return (
              <Todo
                key={index}
                text={todo.text}
                isCompleted={todo.isCompleted}
                completeTodo={completeTodo}
                index={index}
              />
            );
          })}
        {todos.length === 0 && (
          <div css={styles.todoPlaceholderText}>
            Add todo by clicking{" "}
            <span css={styles.addButtonPlaceholderText}> Add </span> button on
            the top of left corner
          </div>
        )}
      </Container>
    </section>
  );
};
Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
