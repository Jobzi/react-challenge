import CalendarBody from "./CalendarBody";
import CalendarHeaderDays from "./CalendarHeaderDays";
import "./styles.css";

function Calendar() {
  return (
    <div className="calendar">
      <CalendarHeaderDays />
      <CalendarBody />
    </div>
  );
}

export default Calendar;
