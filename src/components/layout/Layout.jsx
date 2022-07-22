import styled, { css } from "styled-components";

import { useCleanUp } from "../../features/todos/use-cleanup";
import { useTheme } from "../../features/theme/use-theme";

import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
  const cleanUp = useCleanUp();
  const toggle = useTheme();

  return (
    <MainContainer theme={toggle.theme}>
      <ContentWrapper>
        <Header cleanUp={cleanUp} {...toggle} />
        {children}
        <Footer />
      </ContentWrapper>
    </MainContainer>
  );
};

export { Layout };

const MainContainer = styled.main`
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

const ContentWrapper = styled.div`
  max-width: 520px;
  margin: 0 auto;
`;
