import {
  addDays,
  addMonths,
  addWeeks,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
  subMonths,
  subWeeks,
} from "date-fns";
import { EmptyDayProps } from "../types/calendarTypes";
import { EventProps } from "../types/eventTypes";

type periodRangeProps = {
  first: Date;
  last: Date;
};

export const createCalendarDaysArray = <T extends EventProps>(
  calendarDaysCount: number,
  firstDay: Date,
  eventDetails: T = {} as T
): Array<EmptyDayProps & EventProps> => {
  return Array.from({ length: calendarDaysCount }, (v, dayIndex) => ({
    day: addDays(firstDay, dayIndex),
    ...eventDetails,
  }));
};

export const getPeriodRangeDate = {
  week(date: Date): periodRangeProps {
    return { first: startOfWeek(date), last: endOfWeek(date) };
  },
  month(date: Date): periodRangeProps {
    return {
      first: startOfWeek(startOfMonth(date)),
      last: endOfWeek(endOfMonth(date)),
    };
  },
};

export const createMonthlyEmptyArray = (date: Date): Array<EmptyDayProps> => {
  const period = getPeriodRangeDate.month(date);
  const calendarDaysCount =
    differenceInCalendarDays(period.last, period.first) + 1;

  return createCalendarDaysArray(calendarDaysCount, period.first);
};

export const createWeeklyEmptyArray = (date: Date): Array<EmptyDayProps> => {
  const period = getPeriodRangeDate.week(date);
  const calendarDaysCount =
    differenceInCalendarDays(period.last, period.first) + 1;

  return createCalendarDaysArray(calendarDaysCount, period.first);
};

export const calendarActions = {
  month: {
    generateCalendar(day: Date) {
      return createMonthlyEmptyArray(day);
    },
    nextPeriod(day: Date) {
      return addMonths(day, 1);
    },
    prevPeriod(day: Date) {
      return subMonths(day, 1);
    },
  },
  week: {
    generateCalendar(day: Date) {
      return createWeeklyEmptyArray(day);
    },
    nextPeriod(day: Date) {
      return addWeeks(day, 1);
    },
    prevPeriod(day: Date) {
      return subWeeks(day, 1);
    },
  },
};
