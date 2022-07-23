import * as reduxHooks from "react-redux";
import { act, renderHook, screen } from "@testing-library/react";

import { clearComplete } from "../todos/todos-slice";

import { useControls } from "./use-controls";

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual("react-redux"),
}));

const testState = [
  {
    id: "g7HFkxC94eH8F",
    value: "learn JavaScript",
    complete: true,
  },
  {
    id: "g7HFkxC94eH8F1",
    value: "learn JavaScript",
    complete: true,
  },
];

describe("useControls", () => {
  test("dispatch works", () => {
    const dispatch = jest.fn();
    const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");
    const mockedSelector = jest.spyOn(reduxHooks, "useSelector");

    mockedDispatch.mockReturnValue(dispatch);

    mockedSelector.mockReturnValue(testState);

    const { result } = renderHook(useControls);

    act(() => {
      result.current.handleClear();
    });
    act(() => {
      result.current.handleControls("all");
    });
    expect(mockedDispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith(clearComplete());
  });
});
