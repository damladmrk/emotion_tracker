import { useState } from "react";
import { format } from "date-fns";

import CalendarGrid from "./CalendarGrid";
import DayEditor from "./DayEditor";

import { loadEntries, upsertEntry } from "../../store/emotionStore";

export default function CalendarPage() {
  // 📅 BUGÜN (tek editlenebilir gün)
  const today = format(new Date(), "yyyy-MM-dd");

  // 🗃️ TÜM KAYITLAR
  const [entries, setEntries] = useState(loadEntries());

  // 📆 GÖRÜNEN AY
  const [currentMonth] = useState(new Date());

  // ✍️ BUGÜNÜ GÜNCELLE
  function handleUpdateToday(update) {
    const next = upsertEntry(today, update);
    setEntries(next);
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "2rem 1.5rem"
      }}
    >
      {/* CALENDAR */}
      <CalendarGrid
        month={currentMonth}
        entries={entries}
      />

      {/* DAY EDITOR – SADECE BUGÜN */}
      <DayEditor
        date={today}
        entry={entries[today]}
        onUpdate={handleUpdateToday}
      />
    </div>
  );
}
