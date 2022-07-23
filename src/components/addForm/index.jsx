import { useForm } from "../../features/todos/use-form";

import { StyledIcon, StyledInput, StyledLabel } from "./styles";

const AddForm = () => {
  const addTodo = useForm();

  return (
    <StyledLabel>
      <StyledIcon />
      <StyledInput {...addTodo} />
    </StyledLabel>
  );
};

export { AddForm };
