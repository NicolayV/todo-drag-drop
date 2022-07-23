import styled from "styled-components";

const StyledDelBtn = styled.span.attrs({ role: "button" })`
  display: none;
  color: var(--colors-todo-text);
  cursor: pointer;
  margin-left: auto;
  &:hover {
    color: red;
  }
`;

export { StyledDelBtn as DelButton };
