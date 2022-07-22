import { Reorder } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectControls } from "../features/controls/controls-slice";

function withTodoItem(Component) {
  return function (props) {
    const { item, variants, ...rest } = props;
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
        <Component {...item} {...rest} />
      </StyledListItem>
    );
  };
}
export { withTodoItem };

const StyledListItem = styled(Reorder.Item)`
  display: flex;

  list-style-type: none;
  width: 100%;
  margin: 0rem 0;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid;
  border-color: var(--colors-todo-border);

  &:hover {
    & span:last-child {
      display: inline-block;
    }
  }
`;
