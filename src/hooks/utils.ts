import { differenceInCalendarDays } from "date-fns";

import { DayProps } from "../types/calendarTypes";
import { createCalendarDaysArray, getPeriodRangeDate } from "../utils/utils";

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
