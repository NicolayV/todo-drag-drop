import React from "react";

import { ListItem } from "./ListItem";

const List = (props) => {
  const { items = [] } = props;
  if (!items.length) return null;
  //   const items = useSelector(selectAllTodos);
  //   const items = ["one", " two", "three"];
  return (
    <>
      <h4>learning react test library</h4>
      <ul>
        {items.map((i) => (
          <ListItem key={i} value={i} />
        ))}
      </ul>
    </>
  );
};

export default List;
