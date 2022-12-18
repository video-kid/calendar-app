import {
  endOfMonth,
  endOfWeek,
  getMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { months } from "../types/calendarTypes";

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
