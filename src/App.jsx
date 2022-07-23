import { Container } from "./styles/Container.styled";
import { ContentWrapper } from "./styles/ContentWrapper.styled";
import { Header } from "./components/layout/header";
import { Todo } from "./features/todos/Todo";
import { Footer } from "./components/layout/footer";
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
