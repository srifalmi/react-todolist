import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle }) => {
  return (
    <section className="header">
      <button
        className="header-button main-black-color"
        onClick={showAddToggle}
      >
        Add
      </button>
      <h1 className="header-title">TODO LISTS</h1>
      <button className="header-button main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired
};
export default Header;
