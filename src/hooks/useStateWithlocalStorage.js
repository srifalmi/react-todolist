import React from "react";
import PropTypes from "prop-types";

const useStateWithlocalStorage = (localStorageKey) => {
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem(localStorageKey)) || []
  );

  if (!localStorageKey) {
    throw new Error("You have to passed in a localStorage key as an argument!");
  }
  React.useEffect(() => {
    localStorage.setItem(localStorageKey.JSON.stringfly(todos));
  }, [todos, localStorageKey]);

  return [todos, setTodos];
};

useStateWithlocalStorage.propTypes = {
  localStorageKey: PropTypes.string.isRequired
};

export default useStateWithlocalStorage;
