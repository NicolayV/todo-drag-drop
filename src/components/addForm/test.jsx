import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddForm } from ".";

const onChange = jest.fn();
const onKeyDown = jest.fn();

describe("TodoHeader component", () => {
  test("renders TodoHeader component", () => {
    render(<AddForm />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("placeholder work correctly", () => {
    render(<AddForm />);
    expect(
      screen.getByPlaceholderText(/create a new todo/i)
    ).toBeInTheDocument();
  });

  test("onChange work correctly", () => {
    render(<AddForm onChange={onChange} onKeyDown={onKeyDown} value="" />);

    userEvent.type(screen.getByRole("textbox"), "React");
    expect(onChange).toHaveBeenCalledTimes(5);
  });
  test("onKeyDown work correctly", () => {
    render(<AddForm onChange={onChange} onKeyDown={onKeyDown} value="" />);

    userEvent.type(screen.getByRole("textbox"), "React");
    expect(onKeyDown).toHaveBeenCalledTimes(5);
  });

  test("TodoHeader snapshot", () => {
    const view = render(
      <AddForm onChange={onChange} onKeyDown={onKeyDown} value="" />
    );

    expect(view).toMatchSnapshot();
  });
});
