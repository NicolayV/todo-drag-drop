import { Container } from "./styles/Container.styled";
import { ContentWrapper } from "./styles/ContentWrapper.styled";
import { Header } from "./components/layout/Header";
import { Todo } from "./features/todo/Todo";
import { Footer } from "./components/layout/Footer";
import { useTheme } from "./features/theme/use-theme";

const App = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <ContentWrapper>
        <Header />
        <Todo />
        <Footer />
      </ContentWrapper>
    </Container>
  );
};

export { App };
