import styled, { css } from "styled-components";

export const StyledTodoFooter = styled.div`
  width: 100%;
  margin: 0;

  padding: 1rem 0.5rem;
  border: none;
  border-radius: 0px 0px 5px 5px;

  display: flex;
  justify-content: space-between;

  background-color: var(--colors-todo-bg);
  color: var(--colors-todo-controls);
`;

export const StyledTodoFooterExtra = styled(StyledTodoFooter)`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  font-weight: var(--fw-bold);
  border-radius: 5px;
  opacity: 1;
  transition: 1s;

  @media (min-width: 500px) {
    opacity: 0;
  }
`;

export const StyledControlsGroup = styled.div`
  display: flex;
  opacity: 1;
  transition: 1s;

  @media (max-width: 500px) {
    opacity: 0;
  }
  @media (max-width: 485px) {
    display: none;
  }
`;

export const StyledControlsGroupExtra = styled.div`
  display: flex;
`;

export const StyledControlsItem = styled.span`
  margin: 0 0.5rem;
  color: var(--colors-todo-controls);
  cursor: pointer;

  &:hover {
    color: var(--colors-todo-text);
  }

  ${(props) => {
    if (props.active === props.name) {
      return css`
        color: var(--colors-todo-control-active);
      `;
    }
  }}
`;

export const StyledClearControl = styled.span`
  cursor: pointer;
  &:hover {
    color: var(--colors-todo-text);
  }
`;
