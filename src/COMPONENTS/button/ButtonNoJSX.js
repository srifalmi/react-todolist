/**  @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";

import { useTheme } from "@emotion/react";

import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({
        align,
        color,
        theme
      }),
      onClick: onClick
    },
    text
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
