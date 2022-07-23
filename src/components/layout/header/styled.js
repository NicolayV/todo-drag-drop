import styled from "styled-components";

export const StyledHeader = styled.header`
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
