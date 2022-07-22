import { withTodoItem } from "../../../hoc/withTodoItem";

import { Checkbox } from "./Checkbox";
import { DelButton } from "./DelButton";
import { ItemText } from "./ItemText";

export const TodoItem = (props) => {
  const { complete, id, value, handleChecked, handleRemove } = props;

  return (
    <>
      <Checkbox onChange={() => handleChecked(id)} checked={complete}>
        <ItemText active={complete}>{value}</ItemText>
      </Checkbox>

      <DelButton onClick={() => handleRemove(id)}>&#9747;</DelButton>
    </>
  );
};

export default withTodoItem(TodoItem);
