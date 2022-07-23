import data from "../../mock/data.json";

import {
  selectAllTodos,
  selectTodosQty,
  selectVisibleTodos,
} from "./todos-slice";

const testState = [
  {
    id: "g7HFkxC94eH8F",
    value: "learn JavaScript",
    complete: true,
  },
];

describe("redux todos selectors", () => {
  test("should select todos state object", () => {
    const result = selectAllTodos({ todos: testState });

    expect(result).toBe(testState);
  });

  test("should select todos qty", () => {
    const result = selectTodosQty({ todos: testState });

    expect(result).toBe(testState.length);
  });

  test("should select 'all' visible todos without selected type", () => {
    const result = selectVisibleTodos({ todos: data });

    expect(result).toEqual(data);
  });
  test("should select 'all' visible todos", () => {
    const result = selectVisibleTodos({ todos: data }, "all");

    expect(result).toEqual(data);
  });

  test("should select 'active' visible todos", () => {
    const result = selectVisibleTodos({ todos: data }, "active");

    expect(result).toEqual(data.filter((i) => i.complete === false));
  });

  test("should select 'completed' visible todos", () => {
    const result = selectVisibleTodos({ todos: data }, "completed");

    expect(result).toEqual(data.filter((i) => i.complete === true));
  });
});
