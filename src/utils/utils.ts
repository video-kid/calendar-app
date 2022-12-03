import { getMonth } from "date-fns";
import { months } from "../types/calendarTypes";

export const getCurrentTime = () => new Date();

export const getMonthNumber = (date: Date): months =>
  (getMonth(date) + 1).toString() as months;
