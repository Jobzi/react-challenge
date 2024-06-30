const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarHeaderDays = () => {
  return (
    <div>
      {DAYS.map((day) => (
        <div key={day}>
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarHeaderDays;
