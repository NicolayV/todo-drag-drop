import { Todo } from "../../components/todo/Todo";
import { useControls } from "../controls/use-controls";

import { useTodos } from "./use-todos";
import { useForm } from "./use-form";

const Todos = () => {
  const todos = useTodos();
  const addTodo = useForm();
  const controls = useControls();

  return <Todo todos={todos} controls={controls} addTodo={addTodo} />;
};

export { Todos };
