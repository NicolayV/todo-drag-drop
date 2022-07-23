import { useSelector } from "react-redux";

import { selectControls } from "../../../features/controls/controls-slice";

import { Checkbox } from "../../UI/Checkbox/index.js.jsx";

import { DelButton } from "../../UI/Button";

import { StyledItemText, StyledListItem } from "./styled";

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

const TodoItem = (props) => {
  const { item, handleChecked, handleRemove } = props;
  const { complete, id, value } = item;
  const listControls = useSelector(selectControls);

  return (
    <StyledListItem
      value={listControls === "all" ? item : null}
      whileDrag={{
        scale: 1.1,
        boxShadow:
          "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
      }}
      {...variants}
    >
      {/*  */}
      {/*  */}
      <Checkbox onChange={() => handleChecked(id)} checked={complete}>
        <StyledItemText active={complete}>{value}</StyledItemText>
      </Checkbox>
      <DelButton onClick={() => handleRemove(id)}>&#9747;</DelButton>
      {/*  */}
      {/*  */}
    </StyledListItem>
  );
};

export { TodoItem };
