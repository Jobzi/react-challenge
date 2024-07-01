import { render, screen } from "@testing-library/react";
import CalendarBody from "./CalendarBody";

// Mock Date object
const mockDate = new Date("2024-06-01T00:00:00");

describe("CalendarBody", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      const expectedDaysInMonth = 30;
      render(<CalendarBody currentDate={mockDate} />);

      for (let day = 1; day <= expectedDaysInMonth; day++) {
        expect(screen.getByText(day)).toBeInTheDocument();
      }
    });
  });
});
