import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;

  & ul {
    padding: 0;
    margin: 0;
  }
`;

export const TodoBody = styled.div`
  background-color: var(--colors-todo-bg);
  min-height: ${(props) => props.bodyHeight || "140px"};

  border-radius: 5px 5px 0px 0px;
  width: 100%;
`;

export const EmptyList = styled.div`
  padding: 1rem 0.5rem;
  color: var(--colors-todo-item-text);
`;
