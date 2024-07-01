import { render, screen } from "@testing-library/react";
import ReminderModal from "./reminderModal";

const defaultProps = {
    isOpen: true,
    setIsOpen: jest.fn(),
    date: "2024-06-01"
};

describe("ReminderModal", () => {
  describe("Rendering", () => {
    test("should render the component", () => {
      render(<ReminderModal {...defaultProps} />);

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
      render(
        <ReminderModal {...defaultProps} isOpen={false} />
      );

      const modalHeader = screen.queryByText(/Add Reminder/i);

      expect(modalHeader).not.toBeInTheDocument();
    });
  });

  describe("Functionality", () => {
    test("should call setIsOpen when clicking on the cancel button", () => {
      render(<ReminderModal {...defaultProps} />);

      const cancelButton = screen.getByText(/Cancel/i);
      cancelButton.click();

      expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
    });

    test("should call setIsOpen when clicking on the save button", () => {
      render(<ReminderModal {...defaultProps} />);

      const saveButton = screen.getByText(/Save/i);
      saveButton.click();

      expect(defaultProps.setIsOpen).toHaveBeenCalledWith(false);
    });
  });
});
