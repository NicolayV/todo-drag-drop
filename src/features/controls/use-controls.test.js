import { Provider } from "react-redux";
import { act, renderHook } from "@testing-library/react";

import { store } from "../../store";

import { useControls } from "./use-controls";

const HookProvider = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>;
};

const wrapper = ({ children }) => {
  return <HookProvider store={store}>{children}</HookProvider>;
};

describe("useControls", () => {
  test("handleControls work correctly", () => {
    const { result } = renderHook(() => useControls(), { wrapper });

    act(() => {
      result.current.handleClear();
    });

    act(() => {
      result.current.handleControls("completed");
    });

    expect(result.current.controlType).toBe("completed");
    expect(result.current.qtyTodo).toBe(0);
  });
});
