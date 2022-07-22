import { render, screen } from "@testing-library/react";

import { DelButton } from "./DelButton";

describe("DelBtn element", () => {
  test("DelBtn renders", () => {
    render(<DelButton data-testid="custom-btn" />);
    expect(screen.getByTestId("custom-btn")).toBeInTheDocument();
    // expect(screen.getByRole("button")).toBeInTheDocument();
    // - span has type button, why this do not work
  });
});
