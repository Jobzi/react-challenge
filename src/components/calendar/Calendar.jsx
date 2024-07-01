import { useState } from "react";
import ReminderModal from "../reminderModal/reminderModal";
import CalendarBody from "./CalendarBody";
import CalendarHeaderDays from "./CalendarHeaderDays";
import "./styles.css";

function Calendar() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="calendar">
      <CalendarHeaderDays />
      <CalendarBody />
      <ReminderModal isOpen={openModal} setIsOpen={setOpenModal} />
    </div>
  );
}

export default Calendar;
