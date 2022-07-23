import styled from "styled-components";

export const StyledLabel = styled.label`
  display: flex;
  line-height: 20px;
`;

export const MainCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const StyledCheckbox = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 1rem 0 0.5rem;
  border-radius: 50%;
  border: 2px solid var(--colors-todo-border);
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-image: url("/images/icon-check.svg"),
      linear-gradient(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: 0.2s;
  }

  ${MainCheckbox}:checked + &::before {
    opacity: 1;
  }
`;
