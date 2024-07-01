import { render, screen } from "@testing-library/react";
import CalendarBody from "./CalendarBody";

// Mock Date object
const defaultProps = {
  currentDate: new Date("2024-06-01T00:00:00"),
  onAddReminder: jest.fn()
};

describe("CalendarBody", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      const expectedDaysInMonth = 30;
      const expectedDaysInPrevMonth = 6;
      const expectedDaysInNextMonth = 6;
      render(<CalendarBody {...defaultProps}/>);

      const daysInMonth = screen.getAllByTestId("day-in-month");
      const daysInPrevMonth = screen.getAllByTestId("day-in-prev-month");
      const daysInNextMonth = screen.getAllByTestId("day-in-next-month");

      expect(daysInMonth).toHaveLength(expectedDaysInMonth);
      expect(daysInPrevMonth).toHaveLength(expectedDaysInPrevMonth);
      expect(daysInNextMonth).toHaveLength(expectedDaysInNextMonth);
    });
  });

  describe("Functionality", () => {
    test("should call onAddReminder when clicking on a day", () => {
      render(<CalendarBody {...defaultProps}/>);

      const day = screen.getAllByTestId("day-in-month")[0];
      day.click();

      expect(defaultProps.onAddReminder).toHaveBeenCalledWith(
        defaultProps.currentDate
      )
    });
  })
});
