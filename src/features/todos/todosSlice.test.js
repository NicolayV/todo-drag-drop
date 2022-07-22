import {
  todosReducer,
  reorderTodos,
  mockedTodos,
  setTodo,
  removeTodo,
  toggleTodo,
  clearComplete,
  clearTodos,
} from "./todos-slice";

const testState = [
  {
    id: "g7HFkxC94eH8F",
    value: "learn JavaScript",
    complete: true,
  },
];

describe("todosSlice", () => {
  test("should return default state when an empty action", () => {
    const result = todosReducer(undefined, { type: "" });

    expect(result).toEqual([]);
  });

  test("should return reorder state with 'mockedTodos' action", () => {
    const action = { type: mockedTodos.type, payload: testState };

    const result = todosReducer([], action);

    expect(result).toEqual(testState);
  });

  test("should return reorder state with 'reorderTodos' action", () => {
    const action = { type: reorderTodos.type, payload: testState };

    const result = todosReducer([], action);

    expect(result).toEqual(testState);
  });

  test("should set new todo item with 'setTodo' action", () => {
    const action = { type: setTodo.type, payload: "Test slice" };

    const result = todosReducer([], action);

    expect(result[0].value).toBe("Test slice");
    expect(result[0].complete).toBe(false);
  });

  test("should remove todo item with 'removeTodo' action", () => {
    const action = { type: removeTodo.type, payload: testState[0].id };

    const result = todosReducer(testState, action);

    expect(result).toEqual([]);
  });

  test("should toggle todo completed status with 'toggleTodo' action", () => {
    const action = { type: toggleTodo.type, payload: testState[0].id };

    const result = todosReducer(testState, action);

    expect(result[0].complete).toBe(false);
  });

  test("should return all items, and set each item completed status to false 'clearComplete' action", () => {
    const action = { type: clearComplete.type };

    const result = todosReducer(testState, action);

    expect(result[0].complete).toBe(false);
  });

  test("should return default state with 'clearTodos' action", () => {
    const action = { type: clearTodos.type };

    const result = todosReducer(testState, action);

    expect(result).toEqual([]);
  });
});
