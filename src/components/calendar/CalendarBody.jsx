function CalendarBody({ currentDate }) {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className="calendar-body">
      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
        <div key={day} className="calendar-cell">
          <span>{day}</span>
        </div>
      ))}
    </div>
  );
}

CalendarBody.defaultProps = {
  currentDate: new Date()
};

export default CalendarBody;
