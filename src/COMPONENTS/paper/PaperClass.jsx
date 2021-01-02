import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { withTheme } from "@emotion/react";

const StyledPaper = styled.div`
  width: 600px;
  height: 700px;
  background-color: ${(props) => props.theme.background.color.primary};
  border-radius: 4px;
  padding: 44px;
`;
const StyledFrame = styled.div`
  border: 2px solid ${(props) => props.theme.color.primary.black};

  height: 100%;
`;

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;
    return (
      <StyledPaper theme={theme}>
        <StyledFrame theme={theme}>{children}</StyledFrame>
      </StyledPaper>
    );
  }
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
}

export default withTheme(Paper);
