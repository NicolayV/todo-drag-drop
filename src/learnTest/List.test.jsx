import { render, screen } from "@testing-library/react";

import List from "./List";

const data = ["one", " two", "three"];

describe("list", () => {
  test("should create List with empty items", () => {
    render(<List />);
    expect(screen.queryByRole("list")).toBeNull();
  });

  test("should create list with certain elements", () => {
    render(<List items={data} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText(/learning/i)).toBeInTheDocument();
    expect(screen.getByText(/one/i)).toBeInTheDocument();
    expect(screen.getByText(/two/i)).toBeInTheDocument();
    expect(screen.getByText(/three/i)).toBeInTheDocument();
  });

  test("snapshot list with data", () => {
    const view = render(<List items={data} />);
    expect(view).toMatchSnapshot();
  });

  test("snapshot list without data", () => {
    const view = render(<List />);
    expect(view).toMatchSnapshot();
  });
});
