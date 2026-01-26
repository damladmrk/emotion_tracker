import {
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    format,
    isToday
  } from "date-fns";
  
  export function getMonthDays(date) {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
  
    return eachDayOfInterval({ start, end }).map((d) => ({
      date: format(d, "yyyy-MM-dd"),
      day: format(d, "d"),
      isToday: isToday(d)
    }));
  }
  