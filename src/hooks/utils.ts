import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import { DayProps } from "../types/calendarTypes";

const createCalendarDaysArray = (
  calendarDaysCount: number,
  firstDayOfCalendarMonth: Date
) =>
  Array.from({ length: calendarDaysCount }, (v, dayIndex) => ({
    day: addDays(firstDayOfCalendarMonth, dayIndex),
  }));

export const createMonthlyArray = (date: Date): Array<DayProps> => {
  const firstDayOfCalendarMonth = startOfWeek(startOfMonth(date));
  const lastDayOfCalendarMonth = endOfWeek(endOfMonth(date));
  const calendarDaysCount =
    differenceInCalendarDays(lastDayOfCalendarMonth, firstDayOfCalendarMonth) +
    1;

  return createCalendarDaysArray(calendarDaysCount, firstDayOfCalendarMonth);
};

export const createWeeklyArray = (date: Date): Array<DayProps> => {
  const firstDay = startOfWeek(date);
  const lastDay = endOfWeek(date);
  const calendarDaysCount = differenceInCalendarDays(lastDay, firstDay) + 1;

  return createCalendarDaysArray(calendarDaysCount, firstDay);
};
