import { getMonthDays } from "../../util/dates";
import DayCell from "./DayCell";

export default function CalendarGrid({ month, entries }) {
  const days = getMonthDays(month);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "0.5rem"
      }}
    >
      {days.map((day) => (
        <DayCell
          key={day.date}
          date={day.date}
          dayNumber={day.day}
          entry={entries[day.date]}
          isToday={day.isToday}
        />
      ))}
    </div>
  );
}
