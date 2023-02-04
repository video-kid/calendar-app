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
import {
  DayProps,
  EmptyDayProps,
  months,
  periodRangeProps,
} from "../types/calendarTypes";
import { EventCalendarProps, EventProps } from "../types/eventTypes";
import { getDateDetails } from "../utils/utils";

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

export const createCalendarEmptyArray = (
  period: periodRangeProps
): Array<EmptyDayProps> => {
  const calendarDaysCount =
    differenceInCalendarDays(period.last, period.first) + 1;

  return createCalendarDaysArray(calendarDaysCount, period.first);
};

export const calendarActions = {
  month: {
    generateEmptyCalendar(day: Date) {
      return createCalendarEmptyArray(getPeriodRangeDate.month(day));
    },
    nextPeriod(day: Date) {
      return addMonths(day, 1);
    },
    prevPeriod(day: Date) {
      return subMonths(day, 1);
    },
  },
  week: {
    generateEmptyCalendar(day: Date) {
      return createCalendarEmptyArray(getPeriodRangeDate.week(day));
    },
    nextPeriod(day: Date) {
      return addWeeks(day, 1);
    },
    prevPeriod(day: Date) {
      return subWeeks(day, 1);
    },
  },
};

export const fillEmptyCalendarWithCalendarEvents = <T>(
  events: EventCalendarProps<T>,
  emptyCalendar: Array<EmptyDayProps>
): Array<DayProps<T>> =>
  emptyCalendar.map((day) => ({
    day: day.day,
    events:
      events[getDateDetails(day.day).year]?.[
        getDateDetails(day.day).month as months
      ]?.[getDateDetails(day.day).day] || {},
  }));
