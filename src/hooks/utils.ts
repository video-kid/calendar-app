import { addDays, differenceInCalendarDays } from "date-fns";

import { DayProps } from "../types/calendarTypes";
import { getPeriodRangeDate } from "../utils/utils";

const createCalendarDaysArray = (
  calendarDaysCount: number,
  firstDayOfCalendarMonth: Date
) =>
  Array.from({ length: calendarDaysCount }, (v, dayIndex) => ({
    day: addDays(firstDayOfCalendarMonth, dayIndex),
  }));

export const createMonthlyArray = (date: Date): Array<DayProps> => {
  const period = getPeriodRangeDate.month(date);
  const calendarDaysCount =
    differenceInCalendarDays(period.last, period.first) + 1;

  return createCalendarDaysArray(calendarDaysCount, period.first);
};

export const createWeeklyArray = (date: Date): Array<DayProps> => {
  const period = getPeriodRangeDate.week(date);
  const calendarDaysCount =
    differenceInCalendarDays(period.last, period.first) + 1;

  return createCalendarDaysArray(calendarDaysCount, period.first);
};
