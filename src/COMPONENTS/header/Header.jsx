/**  @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";

import Container from "../../Layout/Container";
import Item from "../../Layout/Item";

import { useTheme } from "@emotion/react";

import Button from "../button/ButtonClass";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
        </Item>

        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>TODO LISTS</h1>
        </Item>

        <Item flex={1} align="center">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};
export default Header;
