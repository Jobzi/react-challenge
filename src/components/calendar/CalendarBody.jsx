function CalendarBody({ currentDate }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const startDay = new Date(year, month, 1).getDay();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonthDays = Array.from({ length: startDay }, (_, i) => (
    <div key={`prev-${i}`} className="calendar-cell not-current-month" data-testid="day-in-prev-month">
      <span>{daysInPrevMonth - i}</span>
    </div>
  )).reverse();

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
    <div key={day} className="calendar-cell" data-testid="day-in-month">
      <span>{day}</span>
    </div>
  ));

  const totalDays = 42;
  const nextMonthDays = Array.from({ length: totalDays - (daysInMonth + startDay) }, (_, i) => i + 1).map((day) => (
    <div key={`next-${day}`} className="calendar-cell not-current-month" data-testid="day-in-next-month">
      <span>{day}</span>
    </div>
  ));

  return (
    <div className="calendar-body">
      {prevMonthDays}
      {currentMonthDays}
      {nextMonthDays}
    </div>
  );
}

CalendarBody.defaultProps = {
  currentDate: new Date()
};

export default CalendarBody;
