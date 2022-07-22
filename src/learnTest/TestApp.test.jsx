import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TestApp } from "./TestApp";

describe("TestApp component", () => {
  test("TestApp renders", () => {
    render(<TestApp />);

    expect(screen.getByText(/find course:/i)).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("typing in searchbox works", () => {
    render(<TestApp />);

    expect(screen.queryByDisplayValue(/react/i)).toBeNull();
    userEvent.type(screen.getByRole("textbox"), "React");
    expect(screen.getByDisplayValue(/react/i)).toBeInTheDocument();
  });

  test("search filter is working", () => {
    render(<TestApp />);

    expect(screen.getByText(/HTML/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();

    userEvent.type(screen.getByRole("textbox"), "script");

    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.queryByText(/HTML/)).toBeNull();
  });

  test("TestApp snapshot", () => {
    const view = render(<TestApp />);

    expect(view).toMatchSnapshot();
  });
});
