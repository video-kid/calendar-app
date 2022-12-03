import { getMonth } from "date-fns";

export const getCurrentTime = () => new Date();

export const getMonthNumber = (date: Date) => getMonth(date) + 1;
