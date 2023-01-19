import { differenceInCalendarDays, getMonth } from "date-fns";
import { createCalendarDaysArray } from "../hooks/utils";

import { DayProps } from "../types/calendarTypes";

import { months } from "../types/calendarTypes";
import { EventCalendarProps, EventProps } from "../types/eventTypes";

export const getCurrentTime = () => new Date();

export const getMonthNumber = (date: Date): months =>
  (getMonth(date) + 1).toString() as months;

export const getDateDetails = (date: Date) => ({
  year: date.getFullYear().toString(),
  month: (date.getMonth() + 1).toString(),
  day: date.getDate().toString(),
});

export const eventToCalendarConverter = <T>(
  events: EventCalendarProps<T>,
  calendarArray: Array<DayProps>
) =>
  calendarArray.map((day) => ({
    day: day.day,
    events:
      events[getDateDetails(day.day).year][
        getDateDetails(day.day).month as months
      ]?.[getDateDetails(day.day).day] || {},
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
          [day]: {
            ...acc?.[year]?.[month]?.[day],
            [event?.id]: event,
          },
        },
      },
    };
  }, {});
};
