import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

const mockComponents = {
  reminderModal: jest.fn()
};

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

jest.mock("../reminderModal/reminderModal", () => {
  return function MockReminderModal(props) {
    mockComponents.reminderModal(props);
    return <div>ReminderModal Component</div>;
  };
});

describe("Calendar", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      render(<Calendar />);

      const header = screen.getByText(/CalendarHeader Component/i);
      const body = screen.getByText(/CalendarBody Component/i);
      const modal = screen.getByText(/ReminderModal Component/i);

      expect(header).toBeInTheDocument();
      expect(body).toBeInTheDocument();
      expect(modal).toBeInTheDocument();
    });

    test("should render the ReminderModal component with isOpen prop as false", () => {
      render(<Calendar />);

      expect(mockComponents.reminderModal).toHaveBeenCalledWith(
        expect.objectContaining({
          isOpen: false,
          setIsOpen: expect.any(Function)
        })
      );
    });
  });
});
