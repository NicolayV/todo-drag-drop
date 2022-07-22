import { useEffect } from "react";
import { useState } from "react";

import List, { SearchInput } from "./index";

const data = ["HTML", "CSS", "JavaScript", "React", "RTK", "TypeScript", "RTL"];

const TestApp = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(
      data.filter((el) => el.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search]);

  return (
    <>
      <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}>
        Find course:
      </SearchInput>
      <List items={items} />
    </>
  );
};

export { TestApp };
