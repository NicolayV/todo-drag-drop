import { useTheme } from "../../../features/theme/use-theme";
import { useCleanUp } from "../../../features/todos/use-cleanup";

import { StyledHeader } from "./styles";

const Header = () => {
  const cleanUp = useCleanUp();
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <h1 onClick={cleanUp}>TODO</h1>

      {theme === "light" ? (
        <img src="/images/icon-sun.svg" alt="icon-sun" onClick={toggleTheme} />
      ) : (
        <img
          src="/images/icon-moon.svg"
          alt="icon-moon"
          onClick={toggleTheme}
        />
      )}
    </StyledHeader>
  );
};

export { Header };
