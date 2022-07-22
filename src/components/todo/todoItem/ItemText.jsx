import styled, { css } from "styled-components";

const StyledItemText = styled.span`
  color: var(--colors-todo-text);
  cursor: pointer;

  ${(props) => {
    if (props.active) {
      return css`
        text-decoration: line-through;
        color: var(--colors-todo-text-decor);
      `;
    }
  }}
  ${(props) => {
    if (!props.active) {
      return css`
        &:hover {
          color: var(--colors-todo-text-hover);
        }
      `;
    }
  }}
`;

export { StyledItemText as ItemText };
