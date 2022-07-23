import { AddForm } from "../../components/form/AddForm";
import {
  ControlForm,
  MobileControlForm,
} from "../../components/form/ControlForm";

import { TodoList } from "../../components/todo/TodoList";

import { TodoWrapper } from "../../styles/TodoWrapper.styled";

const Todo = () => {
  return (
    <TodoWrapper>
      <AddForm />
      <TodoList />
      <ControlForm />
      <MobileControlForm />
    </TodoWrapper>
  );
};

export { Todo };
