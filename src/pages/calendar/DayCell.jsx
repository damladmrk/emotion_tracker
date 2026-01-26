import { coreColors } from "../../util/colors";

export default function DayCell({ dayNumber, entry, isToday }) {
  const bgColor = entry?.core
    ? coreColors[entry.core]
    : "#f2f2ef";

  return (
    <div
      style={{
        height: "80px",
        borderRadius: "12px",
        background: bgColor,
        padding: "0.5rem",
        boxSizing: "border-box",
        border: isToday ? "2px solid #222" : "1px solid transparent",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        fontSize: "0.85rem",
        fontWeight: isToday ? 600 : 400
      }}
    >
      {dayNumber}
    </div>
  );
}
