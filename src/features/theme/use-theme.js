import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTheme, setTheme } from "./theme-slice";

const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export { useTheme };
