import { render, screen } from "@testing-library/react";

import { TodoItem } from "./TodoItem";

const handleChecked = jest.fn();
const handleRemove = jest.fn();

describe("TodoItem element", () => {
  test("renders TodoItem element", () => {
    render(
      <TodoItem
        complete={true}
        id="123"
        value="Hello World"
        handleChecked={handleChecked}
        handleRemove={handleRemove}
      />
    );
    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
