import { useState } from "react";
import { useDispatch } from "react-redux";

import { setTodo } from "./todos-slice";

const useForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleKey = (event) => {
    const pressEnter = event.key === "Enter";
    if (pressEnter && inputValue) {
      dispatch(setTodo(inputValue));
      setInputValue("");
    }
  };

  return { value: inputValue, onChange: handleChange, onKeyDown: handleKey };
};

export { useForm };
