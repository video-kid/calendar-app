import {
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  getDayOfYear,
  getMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import styled from "styled-components";
import { DayProps } from "../../types/calendarTypes";

import Day from "../Day/Day";

const getCurrentTime = () => new Date();

const getMonthNumber = (date: Date) => getMonth(date);

const dayOftheYearToDate = (dayIndex: number, year: number) =>
  new Date(year, 0, dayIndex + 1);

const createMonthlyArray = (date: Date): Array<DayProps> => {
  const firstDayOfCalendarMonth = startOfWeek(startOfMonth(date));
  const lastDayOfCalendarMonth = endOfWeek(endOfMonth(date));
  const numberOfFirstDay = getDayOfYear(firstDayOfCalendarMonth);
  const calendarDaysCount =
    differenceInCalendarDays(lastDayOfCalendarMonth, firstDayOfCalendarMonth) +
    1;

  return Array.from({ length: calendarDaysCount }, (v, dayIndex) => ({
    day: dayOftheYearToDate(numberOfFirstDay + dayIndex, 2022),
  }));
};

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 50px;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

interface CalendarProps {
  initialDate?: Date;
  displayMode?: "monthly" | "weekly" | "daily";
}

const Calendar = ({
  initialDate = getCurrentTime(),
  displayMode = "monthly",
}: CalendarProps) => {
  console.log(createMonthlyArray(initialDate));
  return (
    <div>
      <div>
        <button>{`<`}</button>
        {getMonthNumber(initialDate) + 1}
        <button>{`>`}</button>
      </div>
      <div>calendar mode: {displayMode}</div>
      <CalendarWrapper>
        {createMonthlyArray(initialDate).map(({ day }) => (
          <Day key={day.getTime()} day={day} />
        ))}
      </CalendarWrapper>
    </div>
  );
};

export default Calendar;
