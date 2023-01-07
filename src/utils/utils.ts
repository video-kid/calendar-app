import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  getMonth,
  startOfMonth,
  startOfWeek,
  addMonths,
  addWeeks,
  subMonths,
  subWeeks,
} from "date-fns";

import { DayProps } from "../types/calendarTypes";

import { displayMode, months } from "../types/calendarTypes";
import { EventCalendarProps, EventProps } from "../types/eventTypes";

export const getCurrentTime = () => new Date();

export const getMonthNumber = (date: Date): months =>
  (getMonth(date) + 1).toString() as months;

interface periodRangeProps {
  first: Date;
  last: Date;
}

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

export const calendarActions = {
  month: {
    generateCalendar(day: Date) {
      return createMonthlyArray(day);
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
      return createWeeklyArray(day);
    },
    nextPeriod(day: Date) {
      return addWeeks(day, 1);
    },
    prevPeriod(day: Date) {
      return subWeeks(day, 1);
    },
  },
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

export const getDateDetails = (date: Date) => ({
  year: date.getFullYear(),
  month: date.getMonth() + 1,
  day: date.getDate(),
});

export const eventToCalendarConverter = <T>(
  events: EventCalendarProps<T>,
  calendarMode: displayMode,
  selectedDay: Date
) => {
  // console.log(dateRange);
  // console.log(events);
};

export const createCalendarDaysArray = (
  calendarDaysCount: number,
  firstDay: Date,
  eventDetails: any = {}
) =>
  Array.from({ length: calendarDaysCount }, (v, dayIndex) => ({
    day: addDays(firstDay, dayIndex),
    ...eventDetails,
  }));

const getUnmergedDayObjects = (events: Array<EventProps>) =>
  events
    .map((event) => {
      const startDate = new Date(parseInt(event.startTime));
      const endDate = new Date(parseInt(event.endTime));
      const eventDurationInDays =
        differenceInCalendarDays(endDate, startDate) + 1;
      return createCalendarDaysArray(eventDurationInDays, startDate, event);
    })
    .flat();

export const eventsListToCalendarEvents = <T extends EventProps>(
  events: Array<T>
) => {
  return getUnmergedDayObjects(events).reduce((acc, event) => {
    const { year, month, day } = getDateDetails(event.day);
    return {
      ...acc,
      [year]: {
        ...acc[year],
        [month]: {
          ...acc?.[year]?.[month],
          [day]: { ...acc?.[year]?.[month]?.[day], [event.id]: event },
        },
      },
    };
  }, {});
};
