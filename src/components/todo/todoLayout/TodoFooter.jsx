import styled, { css } from "styled-components";

const controlOptions = {
  all: { value: "all", label: "All" },
  active: { value: "active", label: "Active" },
  completed: { value: "completed", label: "Completed" },
};
const options = Object.values(controlOptions);

const TodoFooter = (props) => {
  const { qtyTodo, controlType, handleControls, handleClear } = props;

  return (
    <StyledTodoFooter>
      <span>{qtyTodo} items left</span>

      <StyledControlsGroup>
        {options.map(({ value, label }) => (
          <StyledControlsItem
            active={controlType}
            name={value}
            key={value}
            onClick={() => handleControls(value)}
          >
            {label}
          </StyledControlsItem>
        ))}
      </StyledControlsGroup>

      <StyledClearControl onClick={handleClear}>
        Clear Completed
      </StyledClearControl>
    </StyledTodoFooter>
  );
};

const ExtraTodoFooter = (props) => {
  const { controlType, handleControls } = props;

  return (
    <StyledTodoFooterExtra>
      <StyledControlsGroupExtra>
        {options.map(({ value, label }) => (
          <StyledControlsItem
            active={controlType}
            name={value}
            key={value}
            onClick={() => handleControls(value)}
          >
            {label}
          </StyledControlsItem>
        ))}
      </StyledControlsGroupExtra>
    </StyledTodoFooterExtra>
  );
};

export { TodoFooter, ExtraTodoFooter };

const StyledTodoFooter = styled.div`
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

const StyledTodoFooterExtra = styled(StyledTodoFooter)`
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

const StyledControlsGroup = styled.div`
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

const StyledControlsGroupExtra = styled.div`
  display: flex;
`;

const StyledControlsItem = styled.span`
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

const StyledClearControl = styled.span`
  cursor: pointer;
  &:hover {
    color: var(--colors-todo-text);
  }
`;
