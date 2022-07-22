import { themeReducer, setTheme, selectTheme } from "./theme-slice";

describe("themeSlice", () => {
  test("should return default state when an empty action", () => {
    const result = themeReducer(undefined, { type: "" });

    expect(result).toEqual("light");
  });

  test("should set theme state", () => {
    const action = { type: setTheme.type, payload: "dark" };
    const result = themeReducer("light", action);

    expect(result).toBe("dark");
  });

  test("should select theme state", () => {
    const result = selectTheme({ theme: "dark" });

    expect(result).toEqual("dark");
  });
});
