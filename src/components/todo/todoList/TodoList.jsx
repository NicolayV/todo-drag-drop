import styled from "styled-components";

import { withTodoList } from "../../../hoc/withTodoList";

import TodoItem from "../todoItem/TodoItem";

const TodoList = (props) => {
  const { todoList, heightTodoItem, ...rest } = props;

  return (
    <TodoBody bodyHeight={heightTodoItem}>
      {todoList.length ? (
        todoList.map((item) => <TodoItem key={item.id} item={item} {...rest} />)
      ) : (
        <EmptyList>Todo list are empty...</EmptyList>
      )}
    </TodoBody>
  );
};

export default withTodoList(TodoList);

const TodoBody = styled.div`
  background-color: var(--colors-todo-bg);
  min-height: ${(props) => props.bodyHeight || "140px"};

  border-radius: 5px 5px 0px 0px;
  width: 100%;
`;

const EmptyList = styled.div`
  padding: 1rem 0.5rem;
  color: var(--colors-todo-item-text);
`;
