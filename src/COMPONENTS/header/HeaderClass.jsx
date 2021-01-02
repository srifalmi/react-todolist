import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Container from "../../Layout/Container";
import Item from "../../Layout/Item";

import Button from "../button/ButtonClass";
import { withTheme } from "@emotion/react";

const StyledH1 = styled.h1`
  text-align: center;

  color: ${(props) => props.theme.color.primary.black};

  font-size: 3.6rem;
  font-family: "Bungee", sans-serif;
  text-transform: lowercase;
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos, theme } = this.props;
    return (
      <section className="header-component">
        <Container alignItems="flex-start">
          <Item flex={1}>
            <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
          </Item>

          <Item flex={2}>
            <StyledH1 theme={theme}>TODO LISTS</StyledH1>
          </Item>

          <Item flex={1} align="center">
            <Button
              text="Clear"
              onClick={clearTodos}
              color="red"
              align="right"
            />
          </Item>
        </Container>
      </section>
    );
  }
  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
