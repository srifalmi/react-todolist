import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar terus!"
    },
    {
      text: "AKU KENYANG!"
    },
    {
      text: "AKU DIAM!"
    },
    {
      text: "SEMOGA BERHASIL!"
    },
    {
      text: "apasiii?"
    },
    {
      text: "ayok semangat!"
    },
    {
      text: "ayo solat!"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
