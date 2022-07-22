import { useDispatch, useSelector } from "react-redux";

import { clearComplete, selectAllTodos } from "../todos/todos-slice";

import { selectControls, setType } from "./controls-slice";

const useControls = () => {
  const dispatch = useDispatch();

  const controlType = useSelector(selectControls);
  const todoList = useSelector(selectAllTodos);

  const qtyTodo =
    todoList.length -
      todoList.reduce((previousValue, currentValue) => {
        return previousValue + Number(currentValue.complete);
      }, 0) || 0;

  const handleControls = (str) => {
    if (str !== controlType) return dispatch(setType(str));
  };

  const handleClear = () => {
    dispatch(clearComplete());
  };

  return { qtyTodo, controlType, handleControls, handleClear };
};

export { useControls };
