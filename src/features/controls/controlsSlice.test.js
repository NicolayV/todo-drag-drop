import { controlsReducer, setType, selectControls } from "./controls-slice";

describe("controlsSlice", () => {
  test("should return default state when an empty action", () => {
    const result = controlsReducer(undefined, { type: "" });

    expect(result).toEqual("all");
  });

  test("should set controls type state", () => {
    const action = { type: setType.type, payload: "active" };
    const result = controlsReducer("all", action);

    expect(result).toBe("active");
  });

  test("should select controls state", () => {
    const result = selectControls({ controls: "completed" });

    expect(result).toEqual("completed");
  });
});
