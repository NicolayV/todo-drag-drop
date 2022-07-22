import { render, screen } from "@testing-library/react";

import { Footer } from "./Footer";

test("render footer", () => {
  render(<Footer />);

  expect(screen.getByText("Drag and drop to reorder list")).toBeInTheDocument();
});
