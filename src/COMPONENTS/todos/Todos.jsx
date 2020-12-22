/**  @jsx jsx */
import { jsx } from "@emotion/react";

//import React from "react";
import PropTypes from "prop-types";
import * as styles from "./todos.styles";

//import styles from "./todos.module.css";

import Todo from "../todo/Todo";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section css={styles.todos}>
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
          <span css={styles.addButtonPlaceholderText}> Add </span> button on the
          top left corner
        </div>
      )}
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
