import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  line-height: 20px;
  width: 100%;
  margin: 1rem 0;
  border: none;
  border-radius: 5px;
  background-color: var(--colors-todo-bg);
  box-shadow: var(--shadow);
`;

export const StyledIcon = styled.span`
  height: 20px;
  width: 20px;
  margin: 0 1rem 0 1rem;
  border: 2px solid var(--colors-todo-border);
  border-radius: 50%;
  background-color: var(--colors-todo-bg);
`;

export const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Create a new todo...",
})`
  padding: 1rem 0rem;
  width: 100%;

  color: var(--colors-todo-text);
  border-radius: 5px;
  border: none;
  outline: none;

  background-color: var(--colors-todo-bg);

  font-family: var(--family);
  font-size: var(--fs-typical);
`;
