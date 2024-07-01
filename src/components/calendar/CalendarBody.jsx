function DayCell({ day, className, dataTestId, textStyle = "" }) {
  return (
    <div className={className} data-testid={dataTestId}>
      <span className={textStyle}>{day}</span>
    </div>
  );
}

function CalendarBody({ currentDate }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();

  const startDay = new Date(year, month, 1).getDay();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const isCurrentMonth =
    month === today.getMonth() && year === today.getFullYear();

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonthDays = Array.from({ length: startDay }, (_, i) => (
    <DayCell
      key={`prev-${i}`}
      day={daysInPrevMonth - i}
      className="calendar-cell not-current-month"
      dataTestId="day-in-prev-month"
    />
  )).reverse();

  const currentMonthDays = Array.from(
    { length: daysInMonth },
    (_, i) => i + 1
  ).map((day) => {
    const [saturday, sunday] = [0, 6];
    const isToday = isCurrentMonth && day === today.getDate();
    const date = new Date(year, month, day);
    const isWeekend = [saturday, sunday].includes(date.getDay());
    const dayClass = isWeekend ? "weekend" : "weekday";

    return (
      <DayCell
        key={day}
        day={day}
        className={`calendar-cell ${dayClass}`}
        dataTestId="day-in-month"
        textStyle={isToday ? "today" : ""}
      />
    );
  });

  const totalDays = 42;
  const nextMonthDays = Array.from(
    { length: totalDays - (daysInMonth + startDay) },
    (_, i) => i + 1
  ).map((day) => (
    <DayCell
      key={`next-${day}`}
      day={day}
      className="calendar-cell not-current-month"
      dataTestId="day-in-next-month"
    />
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
