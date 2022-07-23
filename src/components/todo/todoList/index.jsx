import { AnimatePresence, Reorder } from "framer-motion";

import { TodoItem } from "../TodoItem";
import { useTodos } from "../../../features/todo/use-todos";

import { EmptyList, StyledList, TodoBody } from "./styled";

const TodoList = () => {
  const { todoList, heightTodoItem, handleReorder, ...rest } = useTodos();

  return (
    <StyledList>
      <Reorder.Group
        as="ul"
        axys="y"
        values={todoList}
        onReorder={handleReorder}
      >
        <AnimatePresence initial={true}>
          {/*  */}
          {/*  */}
          <TodoBody bodyHeight={heightTodoItem}>
            {todoList.length ? (
              todoList.map((item) => (
                <TodoItem key={item.id} item={item} {...rest} />
              ))
            ) : (
              <EmptyList>Todo list are empty...</EmptyList>
            )}
          </TodoBody>
          {/*  */}
          {/*  */}
        </AnimatePresence>
      </Reorder.Group>
    </StyledList>
  );
};

export { TodoList };
