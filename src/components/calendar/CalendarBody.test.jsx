import { render, screen } from "@testing-library/react";
import CalendarBody from "./CalendarBody";

describe("CalendarBody", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      render(<CalendarBody />);

      const title = screen.getByText(/CalendarBody Component/i);

      expect(title).toBeInTheDocument();
    });
  });
});
