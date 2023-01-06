import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  getMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { months } from "../types/calendarTypes";
import { EventProps } from "../types/eventTypes";

export const getCurrentTime = () => new Date();

export const getMonthNumber = (date: Date): months =>
  (getMonth(date) + 1).toString() as months;

interface periodRangeProps {
  first: Date;
  last: Date;
}

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

const createEventsDatesFilterConfig = (date: Date) => ({
  day: date.getDate(),
  month: date.getMonth() + 1,
  year: date.getFullYear(),
});

const eventsDatesFilterConfig = (dateRange: periodRangeProps) => ({
  startDateConfig: createEventsDatesFilterConfig(dateRange.first),
  endDateConfig: createEventsDatesFilterConfig(dateRange.last),
});

export const eventToCalendarConverter = <T>(
  events: T,
  dateRange: periodRangeProps
) => {
  // console.log(dateRange);
  // console.log(events);
  // console.log(eventsDatesFilterConfig(dateRange));
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

export const eventsListToCalendarEvents = (events: Array<EventProps>) => {
  return getUnmergedDayObjects(events).reduce((acc, event) => {
    const year = event.day.getFullYear();
    const month = event.day.getMonth() + 1;
    const day = event.day.getDate();

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
