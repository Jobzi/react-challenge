import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

jest.mock("./CalendarHeader", () => {
  return function MockCalendarHeader() {
    return <div>CalendarHeader Component</div>;
  };
});


describe("Calendar", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      render(<Calendar />);

      const title = screen.getByText(/CalendarHeader Component/i);

      expect(title).toBeInTheDocument();
    });
  });
});
