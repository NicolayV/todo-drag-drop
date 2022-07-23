import { useDispatch } from "react-redux";

import { clearTodos } from "./todos-slice";

const useCleanUp = () => {
  const dispatch = useDispatch();

  const cleanUp = () => {
    dispatch(clearTodos());
  };
  return cleanUp;
};

export { useCleanUp };
