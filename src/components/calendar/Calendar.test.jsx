import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      render(<Calendar />);

      const title = screen.getByText(/Calendar Component/i);

      expect(title).toBeInTheDocument();
    });
  });
});
