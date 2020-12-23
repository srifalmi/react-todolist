/**  @jsx jsx */
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
//import cx from "classnames";
//import { useTheme } from "emotion-theming";
import { useTheme } from "@emotion/react";

//import styles from "./button.module.css";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  /* const classNames = [
    "header-button",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color",
    align === "left" && "align-left",
    align === "right" && "aligb-right"
  ].join(" ");
  */

  /* const classNames = cx(styles.headerButton, {
    [styles.mainBlackColor]: color === "black",
    [styles.mainRedColor]: color === "red",
    [styles.alignRight]: align === "right",
    [styles.alignLeft]: align === "left"
  });
*/

  const theme = useTheme();

  return (
    // <button className={classNames} onClick={onClick}>
    // {text}
    //  </button>

    <button css={styles.button({ align, color, theme })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
