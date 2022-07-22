import styled from "styled-components";

const Header = (props) => {
  const { cleanUp, theme, toggleTheme } = props;

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

const StyledHeader = styled.header`
  height: 11rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    color: hsl(236, 33%, 92%);
    letter-spacing: 1rem;
  }

  & h1,
  img {
    cursor: pointer;
  }
`;
