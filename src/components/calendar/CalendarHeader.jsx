const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarHeaderDays = () => {
  return (
    <div className="calendar-header-days">
      {DAYS.map((day) => (
        <div key={day} className="calendar-header-day">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarHeaderDays;
