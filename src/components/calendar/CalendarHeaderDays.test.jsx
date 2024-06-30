import { render, screen } from "@testing-library/react";
import CalendarHeaderDays from "./CalendarHeaderDays";

const EXPECTED_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

describe("CalendarHeaderDays", () => {
  describe("Rendering", () => {
    test.each(EXPECTED_DAYS)("should render the day %s", (day) => {
      render(<CalendarHeaderDays />);

      const dayElement = screen.getByText(day);

      expect(dayElement).toBeInTheDocument();
    });
  });
});
