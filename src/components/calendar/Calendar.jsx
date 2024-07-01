import { useState } from "react";
import ReminderModal from "../reminderModal/reminderModal";
import CalendarBody from "./CalendarBody";
import CalendarHeaderDays from "./CalendarHeaderDays";
import "./styles.css";

function Calendar() {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState("");
  const handleAddReminder = (date) => {
    setOpenModal(true);
    setDate(date);
  };


  return (
    <div className="calendar">
      <CalendarHeaderDays />
      <CalendarBody onAddReminder={handleAddReminder} />
      <ReminderModal isOpen={openModal} setIsOpen={setOpenModal} date={date} />
    </div>
  );
}

export default Calendar;
