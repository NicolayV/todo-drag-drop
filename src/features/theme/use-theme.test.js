import { Provider } from "react-redux";
import { render, screen, renderHook } from "@testing-library/react";

import { store } from "../../store";

import { useTheme } from "./use-theme";
import { Layout } from "../../components/layout/Layout";
import userEvent from "@testing-library/user-event";

describe("use-theme element", () => {
  test("should...", () => {
    render(
      <Provider store={store}>
        {/* useTheme() */}
        <Layout />
      </Provider>
    );

    const title = screen.getByRole("heading", {
      name: /todo/i,
    });

    const imgSun = screen.getByRole("img", {
      name: /icon\-sun/i,
    });

    userEvent.click(imgSun);

    expect(
      screen.getByRole("img", {
        name: /icon\-moon/i,
      })
    ).toBeInTheDocument();
  });
});
