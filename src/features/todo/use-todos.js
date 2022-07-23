import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectControls } from "../controls/controls-slice";
import data from "../../mock/data.json";

const {
  mockedTodos,
  reorderTodos,
  removeTodo,
  toggleTodo,
  selectTodosQty,
  selectVisibleTodos,
} = require("./todos-slice");

const useTodos = () => {
  const dispatch = useDispatch();

  const control = useSelector(selectControls);
  const quantity = useSelector(selectTodosQty);
  const visibleTodoList = useSelector((sate) =>
    selectVisibleTodos(sate, control)
  );

  const heightTodoItem = quantity ? `${quantity * 52}px` : "140px";

  const handleReorder = (arr) => {
    dispatch(reorderTodos(arr));
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleChecked = (id) => {
    dispatch(toggleTodo(id));
  };

  useEffect(
    function initTodoItems() {
      if (!quantity) {
        dispatch(mockedTodos(data));
      }
    },
    [quantity, dispatch]
  );

  return {
    todoList: visibleTodoList,
    heightTodoItem,
    handleReorder,
    handleRemove,
    handleChecked,
  };
};

export { useTodos };
