import styled from "styled-components";

const Footer = () => (
  <>
    <StyledFooter>
      <span>Drag and drop to reorder list</span>
    </StyledFooter>
  </>
);

export { Footer };

const StyledFooter = styled.footer`
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  text-align: center;

  & span {
    margin: 0.5rem;
    padding: 0.5rem;
    color: var(--colors-todo-controls);
  }
`;
