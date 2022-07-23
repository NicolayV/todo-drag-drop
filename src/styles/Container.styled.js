import styled, { css } from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  width: 100vw;
  background-color: var(--colors-bg);
  background-position: top;
  background-repeat: no-repeat;
  background-size: 100% 300px;
  padding: 0 2rem;

  @media (max-width: 1440px) {
    background-size: 1440px 300px;
  }

  ${(props) => {
    if (props.theme === "light") {
      return css`
        background-image: url("/images/bg-desktop-light.jpg");
        @media (max-width: 375px) {
          background-image: url("/images/bg-mobile-light.jpg");
          background-size: 500px 300px;
        }
      `;
    }
    if (props.theme === "dark") {
      return css`
        background-image: url("/images/bg-desktop-dark.jpg");
        @media (max-width: 375px) {
          background-image: url("/images/bg-mobile-dark.jpg");
          background-size: 500px 300px;
        }
      `;
    }
  }}
`;
