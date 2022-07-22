import { act, renderHook } from "@testing-library/react";

import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("render", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.counter).toBe(0);
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(1);
  });
});
