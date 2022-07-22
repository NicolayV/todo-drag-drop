import { TodoCover } from "./todoLayout/TodoCover";
import TodoList from "./todoList/TodoList";

const Todo = (props) => {
  const {
    todos: { todoList, ...rest },
    ...coverProps
  } = props;

  return (
    <TodoCover todoList={todoList} {...coverProps}>
      <TodoList todoList={todoList} {...rest} />
    </TodoCover>
  );
};

export { Todo };
