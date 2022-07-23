import styled, { css } from "styled-components";
import { Reorder } from "framer-motion";

export const StyledListItem = styled(Reorder.Item)`
  display: flex;

  list-style-type: none;
  width: 100%;
  margin: 0rem 0;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid;
  border-color: var(--colors-todo-border);

  &:hover {
    & span:last-child {
      display: inline-block;
    }
  }
`;

export const StyledItemText = styled.span`
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
