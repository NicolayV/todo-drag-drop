import { useForm } from "../../../features/todo/use-form";

import { StyledIcon, StyledInput, StyledLabel } from "./styled";

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
