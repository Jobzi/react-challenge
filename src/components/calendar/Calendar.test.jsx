import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

jest.mock("./CalendarHeaderDays", () => {
  return function MockCalendarHeader() {
    return <div>CalendarHeader Component</div>;
  };
});

jest.mock("./CalendarBody", () => {
  return function MockCalendarBody() {
    return <div>CalendarBody Component</div>;
  };
});

describe("Calendar", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      render(<Calendar />);

      const header = screen.getByText(/CalendarHeader Component/i);
      const body = screen.getByText(/CalendarBody Component/i);

      expect(header).toBeInTheDocument();
      expect(body).toBeInTheDocument();
    });
  });
});
