import { MainCheckbox, StyledCheckbox, StyledLabel } from "./styled";

const Checkbox = ({ children, checked, onChange }) => {
  return (
    <StyledLabel>
      <MainCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox />
      {children}
    </StyledLabel>
  );
};

export { Checkbox };
