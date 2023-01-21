import { differenceInCalendarDays, getMonth } from "date-fns";
import { createCalendarDaysArray } from "../hooks/utils";

import { EmptyDayProps, months } from "../types/calendarTypes";
import { EventCalendarProps, EventProps } from "../types/eventTypes";

export const getCurrentTime = () => new Date();

export const getMonthNumber = (date: Date): months =>
  (getMonth(date) + 1).toString() as months;

export const getDateDetails = (date: Date) => ({
  year: date.getFullYear().toString(),
  month: (date.getMonth() + 1).toString(),
  day: date.getDate().toString(),
});

const spreadEventsToUnorderedEventDayArray = (
  events: Array<EventProps>
): Array<EmptyDayProps & EventProps> => {
  return events
    .map((event) => {
      const startDate = new Date(parseInt(event.startTime));
      const endDate = new Date(parseInt(event.endTime));
      const eventDurationInDays =
        differenceInCalendarDays(endDate, startDate) + 1;
      return createCalendarDaysArray(eventDurationInDays, startDate, event);
    })
    .flat();
};

const emptyObject: { [key: string]: any } = {};

export const eventsListToCalendarEvents = <T extends EventProps>(
  events: Array<T>
): EventCalendarProps<T> => {
  return spreadEventsToUnorderedEventDayArray(events).reduce((acc, event) => {
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
  }, emptyObject);
};
