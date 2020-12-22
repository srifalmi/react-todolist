import { css } from "@emotion/react";

export const todos = () =>
  css`
    display: flex;
    flex-direction: column;

    min-height: 500px;
  `;
export const todoPlaceholderText = () =>
  css`
    font-size: 24px;
    font-family: "Trispace", sans-serif;

    text-align: center;
    padding: 16px;
  `;
export const addButtonPlaceholderText = () =>
  css`
    font-size: 24px;
    font-family: "Bungee", sans-serif;
  `;
