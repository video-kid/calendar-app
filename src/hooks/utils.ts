import {
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  getDayOfYear,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { DayProps } from "../types/calendarTypes";

const dayOftheYearToDate = (dayIndex: number, year: number) =>
  new Date(year, 0, dayIndex + 1);

export const createMonthlyArray = (date: Date): Array<DayProps> => {
  const firstDayOfCalendarMonth = startOfWeek(startOfMonth(date));
  const lastDayOfCalendarMonth = endOfWeek(endOfMonth(date));
  const numberOfFirstDay = getDayOfYear(firstDayOfCalendarMonth);
  const calendarDaysCount =
    differenceInCalendarDays(lastDayOfCalendarMonth, firstDayOfCalendarMonth) +
    1;

  return Array.from({ length: calendarDaysCount }, (v, dayIndex) => ({
    day: dayOftheYearToDate(numberOfFirstDay + dayIndex, date.getFullYear()),
  }));
};
