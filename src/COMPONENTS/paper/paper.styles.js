import { css } from "@emotion/react";

export const paper = ({ theme }) =>
  css`
    width: 600px;
    height: 700px;
    background-color: ${theme.background.color.primary};
    border-radius: 4px;
    padding: 44px;
  `;

export const frame = ({ theme }) =>
  css`
    border: 2px solid ${theme.color.primary.black};

    height: 100%;

    /*display: flex;
    flex-direction: column;
    justify-content: space-between;
    */
  `;
