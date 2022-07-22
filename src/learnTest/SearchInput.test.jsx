import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SearchInput } from "./SearchInput";

const onChange = jest.fn();

describe("Search component", () => {
  test("renders search component", () => {
    render(
      <SearchInput value="" onChange={onChange}>
        Find:
      </SearchInput>
    );
    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  test("renders without children component", () => {
    render(<SearchInput value="" onChange={onChange} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders without placeholder", () => {
    render(<SearchInput value="" onChange={onChange} />);
    expect(screen.getByPlaceholderText(/search.../i)).toBeInTheDocument();
  });

  test("custom placeholder work correctly", () => {
    render(
      <SearchInput
        value=""
        onChange={onChange}
        placeholder="placeholder text"
      />
    );
    expect(
      screen.getByPlaceholderText(/placeholder text/i)
    ).toBeInTheDocument();
  });

  test("onChange work correctly", () => {
    render(
      <SearchInput value="" onChange={onChange}>
        Find:
      </SearchInput>
    );
    userEvent.type(screen.getByRole("textbox"), "React");
    userEvent.keyboard("[Enter]");

    expect(onChange).toHaveBeenCalledTimes(5);
  });

  test("dynamic styles works", () => {
    render(<SearchInput value="world" onChange={onChange} />);

    expect(screen.getByText(/search/i)).toHaveClass("label");
    expect(screen.getByRole("textbox")).toHaveClass("input");
    expect(screen.getByRole("textbox")).toHaveClass("filled");
  });

  test("search snapshot", () => {
    const view = render(
      <SearchInput value="" onChange={onChange}>
        Find:
      </SearchInput>
    );

    expect(view).toMatchSnapshot();
  });
});
