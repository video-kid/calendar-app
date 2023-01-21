import { months } from "./calendarTypes";

export type EventProps = {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
};

export type EventsProps<T> = {
  [key: string]: T;
};
export type EventCalendarDayProps<T> = {
  [key: string]: T;
};
export type EventCalendarMonthProps<T> = {
  [key: string]: EventCalendarDayProps<T>;
};

export type EventCalendarYearProps<T> = {
  [key in months]?: EventCalendarMonthProps<T>;
};

export type EventCalendarProps<T> = {
  [key: string]: EventCalendarYearProps<T>;
};
