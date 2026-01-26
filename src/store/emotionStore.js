const STORAGE_KEY = "emotion_calendar_entries";

export function loadEntries() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

export function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function getEntry(date) {
  const entries = loadEntries();
  return entries[date];
}

export function upsertEntry(date, data) {
  const entries = loadEntries();
  const next = {
    ...entries,
    [date]: {
      date,
      ...entries[date],
      ...data
    }
  };
  saveEntries(next);
  return next;
}
