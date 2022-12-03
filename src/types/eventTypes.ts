import { months } from "./calendarTypes";

export interface EventProps {
  name: string;
  type: string;
  startDate: string;
  endDate: string;
}

export interface EventsProps<T> {
  [key: string]: T;
}
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
