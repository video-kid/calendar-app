import { getMonth, lastDayOfMonth } from "date-fns";
import styled from "styled-components";

import Day from "../Day/Day";

const getCurrentEpochTime = (): number => Date.now();

const getMonthNumber = (date: number) => getMonth(date) + 1;

const createMonthlyArray = (date: number) => {
  return Array.from(
    { length: lastDayOfMonth(date).getDate() },
    (v, dayIndex) => ({ day: dayIndex + 1 })
  );
};

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 50px;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

interface CalendarProps {
  initialDate?: number;
  displayMode?: "monthly" | "weekly" | "daily";
}

const Calendar = ({
  initialDate = getCurrentEpochTime(),
  displayMode = "monthly",
}: CalendarProps) => {
  console.log(createMonthlyArray(initialDate));
  return (
    <div>
      <div>
        <button>{`<`}</button>
        {getMonthNumber(initialDate)}
        <button>{`>`}</button>
      </div>
      <div>calendar mode: {displayMode}</div>
      <CalendarWrapper>
        {createMonthlyArray(initialDate).map(({ day }) => (
          <Day key={day} day={day} />
        ))}
      </CalendarWrapper>
    </div>
  );
};

export default Calendar;
