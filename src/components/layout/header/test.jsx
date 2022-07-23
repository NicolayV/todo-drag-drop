import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "./index.js";

const cleanUp = jest.fn();
const toggleTheme = jest.fn();

describe("Header element", () => {
  test("renders Header component", () => {
    render(<Header cleanUp={cleanUp} toggleTheme={toggleTheme} />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByText(/todo/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByAltText(/icon/i)).toBeInTheDocument();
  });

  test("event theme work correctly", () => {
    render(
      <Header theme={"light"} cleanUp={cleanUp} toggleTheme={toggleTheme} />
    );
    expect(screen.getByAltText("icon-sun")).toBeInTheDocument();

    render(<Header theme={""} cleanUp={cleanUp} toggleTheme={toggleTheme} />);
    expect(screen.getByAltText("icon-moon")).toBeInTheDocument();
  });

  test("cleanUp click work correctly", () => {
    render(<Header cleanUp={cleanUp} toggleTheme={toggleTheme} />);
    userEvent.click(screen.getByRole("heading"));
    expect(cleanUp).toHaveBeenCalled();
  });

  test("toggleTheme click work correctly", () => {
    render(<Header cleanUp={cleanUp} toggleTheme={toggleTheme} />);
    userEvent.click(screen.getByRole("img"));
    expect(toggleTheme).toHaveBeenCalled();
  });

  test("Header snapshot", () => {
    const view = render(
      <Header theme="light" cleanUp={cleanUp} toggleTheme={toggleTheme} />
    );

    expect(view).toMatchSnapshot();
  });
});
