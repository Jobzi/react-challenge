import { render, screen } from "@testing-library/react";
import ReminderModal from "./reminderModal";

describe("ReminderModal", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      const isOpen = true;
      const setIsOpen = jest.fn();
      render(<ReminderModal isOpen={isOpen} setIsOpen={setIsOpen} />);

      const modalHeader = screen.getByText(/Add Reminder/i);
      const textLabel = screen.getByText(/Text \(max 30 characters\):/i);
      const cityLabel = screen.getByText(/City:/i);
      const dateLabel = screen.getByText(/Date:/i);
      const timeLabel = screen.getByText(/Time:/i);
      const saveButton = screen.getByText(/Save/i);
      const cancelButton = screen.getByText(/Cancel/i);

      expect(modalHeader).toBeInTheDocument();
      expect(textLabel).toBeInTheDocument();
      expect(cityLabel).toBeInTheDocument();
      expect(dateLabel).toBeInTheDocument();
      expect(timeLabel).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();
      expect(cancelButton).toBeInTheDocument();
    });

    test("should not render the component", () => {
      const isOpen = false;
      const setIsOpen = jest.fn();
      const date = "2024-06-01";
      render(
        <ReminderModal isOpen={isOpen} setIsOpen={setIsOpen} date={date} />
      );

      const modalHeader = screen.queryByText(/Add Reminder/i);

      expect(modalHeader).not.toBeInTheDocument();
    });
  });
});
