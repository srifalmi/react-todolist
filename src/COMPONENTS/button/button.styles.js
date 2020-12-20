import { css } from "@emotion/react";

export const button = ({ color, align }) => {
  let textColor;
  switch (color) {
    case "black":
      textColor = "#484848";
      break;
    case "red":
      textColor = "#e06262";
      break;
    default:
      textColor = "#484848";
  }

  return css`
    font-size: 1.8rem;
    font-family: "Bungee", sans-serif;
    color: ${textColor};
    text-align: ${align};

    width: 23%;

    padding: 16px;
    padding-right: unset;
    cursor: pointer;
    background: unset;
    border: unset;
    outline: unset;
  `;
};
