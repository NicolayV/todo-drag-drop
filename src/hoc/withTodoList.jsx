import { AnimatePresence, Reorder } from "framer-motion";
import styled from "styled-components";

function withTodoList(Component) {
  return function (props) {
    const { todoList, handleReorder, ...rest } = props;

    const variants = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    };

    return (
      <StyledList>
        <Reorder.Group
          as="ul"
          axys="y"
          values={todoList}
          onReorder={handleReorder}
        >
          <AnimatePresence initial={true}>
            <Component todoList={todoList} {...rest} variants={variants} />
          </AnimatePresence>
        </Reorder.Group>
      </StyledList>
    );
  };
}
export { withTodoList };

const StyledList = styled.div`
  width: 100%;

  & ul {
    padding: 0;
    margin: 0;
  }
`;
