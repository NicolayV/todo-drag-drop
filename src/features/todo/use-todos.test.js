import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";

import { store } from "../../store";

import { useTodos } from "./use-todos";

const HookProvider = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const wrapper = ({ children }) => {
  return <HookProvider store={store}>{children}</HookProvider>;
};

describe("useTodos", () => {
  test("useTodos tests", () => {
    const { result } = renderHook(() => useTodos(), { wrapper });
    expect(result.current.heightTodoItem).toBe("312px");

    act(() => {
      result.current.handleRemove(result.current.todoList[0].id);
    });
    expect(result.current.todoList.length).toBe(5);

    act(() => {
      result.current.handleChecked(result.current.todoList[0].id);
    });
    expect(result.current.todoList[0].complete).toBe(true);

    act(() => {
      result.current.handleReorder([
        result.current.todoList[0],
        result.current.todoList[1],
      ]);
    });
    expect(result.current.todoList.length).toBe(2);
  });
});
