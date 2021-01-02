import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Container from "../../Layout/Container";
import Item from "../../Layout/Item";

import Button from "../button/ButtonClass";
import { withTheme } from "@emotion/react";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 0 64px;
  width: 100%;

  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;

  font-family: "Trispace", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleFormSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();

    if (!value) {
      alert("NO BLANK TODO!");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text!");
      this.setState({
        value: ""
      });
      return;
    }
    addTodo(value);

    this.setState({
      value: ""
    });
  };

  handeleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;

    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="0 0 0 16px">
                <StyledInput
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.handeleOnChange}
                />
              </Item>
              <Item>
                <Button text="Add" />
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
  };
}

export default withTheme(TodoForm);
