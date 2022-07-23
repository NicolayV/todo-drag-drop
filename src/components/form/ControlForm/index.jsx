import { useControls } from "../../../features/controls/use-controls";

import {
  StyledClearControl,
  StyledControlsGroup,
  StyledControlsGroupExtra,
  StyledControlsItem,
  StyledTodoFooter,
  StyledTodoFooterExtra,
} from "./styled";

const controlOptions = {
  all: { value: "all", label: "All" },
  active: { value: "active", label: "Active" },
  completed: { value: "completed", label: "Completed" },
};

const options = Object.values(controlOptions);

const ControlForm = () => {
  const { qtyTodo, controlType, handleControls, handleClear } = useControls();

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

const MobileControlForm = () => {
  const { controlType, handleControls } = useControls();

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

export { ControlForm, MobileControlForm };
