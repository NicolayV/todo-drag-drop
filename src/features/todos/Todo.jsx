import { AddForm } from "../../components/addForm";
import { ControlForm, MobileControlForm } from "../../components/controlForm";

import { TodoList } from "../../components/todo/todoList";

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
