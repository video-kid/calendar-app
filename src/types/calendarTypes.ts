import { EventCalendarDayProps } from "./eventTypes";

export type EmptyDayProps = {
  day: Date;
};

export interface DayProps<T> extends EmptyDayProps {
  events: EventCalendarDayProps<T> | null;
}

export type displayMode = "month" | "week";

export type months =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";
