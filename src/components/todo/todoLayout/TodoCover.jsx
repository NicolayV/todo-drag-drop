import styled from "styled-components";

import { ExtraTodoFooter, TodoFooter } from "./TodoFooter";
import { TodoHeader } from "./TodoHeader";

const TodoCover = (props) => {
  const { children, addTodo, controls } = props;
  const { controlType, handleControls } = controls;

  return (
    <TodoWrapper>
      <TodoHeader {...addTodo} />
      {children}
      <TodoFooter {...controls} />
      <ExtraTodoFooter
        controlType={controlType}
        handleControls={handleControls}
      />
    </TodoWrapper>
  );
};
export { TodoCover };

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  min-height: calc(100vh - 10rem - 5rem);

  transition: 2s ease-in-out 0.5s;

  @media (max-width: 500px) {
    min-height: calc(60vh - 10rem - 5rem);
  }
`;
