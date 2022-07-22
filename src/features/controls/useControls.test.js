import * as reduxHooks from "react-redux";

import { act, renderHook } from "@testing-library/react";

import * as actions from "./controls-slice";
import { useControls } from "./use-controls";

jest.mock("react-redux", () => ({
  __esModule: true,
  ...jest.requireActual("react-redux"),
}));
// jest.mock("react-redux", () => {
//   return {
//     __esModule: true,
//     ...jest.requireActual("react-redux"),
//   };
// });

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
    // mockedSelector.mockReturnValue("all");
    // mockedSelector.mockReturnValue("all");
    // const mockedClearComplete = jest.spyOn(actions, "clearComplete");

    const { result } = renderHook(useControls);

    act(() => {
      result.current.handleClear();
    });

    expect(dispatch).toHaveBeenCalledTimes(1);
    // expect(mockedClearComplete).toHaveBeenCalledTimes(1);

    // console.log(handleControls, handleClear);
  });
});
