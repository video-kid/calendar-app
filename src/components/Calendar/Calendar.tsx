import styled from "styled-components";
import { useCalendar } from "../../hooks/useCalendar";
import { displayMode } from "../../types/calendarTypes";
import {
  EventCalendarProps,
  EventProps,
  EventsProps,
} from "../../types/eventTypes";
import { getCurrentTime, getMonthNumber } from "../../utils/utils";

import Day from "../Day/Day";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 50px;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

interface CalendarProps<T> {
  events: T;
  initialDate?: Date;
  displayMode?: displayMode;
}

export const Calendar = ({
  events,
  initialDate = getCurrentTime(),
  displayMode = "month",
}: CalendarProps<EventCalendarProps<EventProps>>) => {
  const {
    selectedDay,
    calendarArray,
    calendarMode,
    changeCalendarMode,
    nextPeriod,
    prevPeriod,
  } = useCalendar();
  console.log(events);
  return (
    <div>
      <div>
        <button onClick={() => prevPeriod()}>{`<`}</button>
        {getMonthNumber(selectedDay)}
        <button onClick={() => nextPeriod()}>{`>`}</button>
      </div>
      <div>
        <div>
          <p>selected mode: {calendarMode}</p>
          <input
            type="radio"
            id="month"
            name="period"
            value="month"
            onChange={(e) => changeCalendarMode(e.target.value as displayMode)}
            defaultChecked={calendarMode === "month"}
          />
          <label htmlFor="month">month</label>
        </div>

        <div>
          <input
            type="radio"
            id="week"
            name="period"
            value="week"
            onChange={(e) => changeCalendarMode(e.target.value as displayMode)}
            defaultChecked={calendarMode === "week"}
          />
          <label htmlFor="week">week</label>
        </div>
      </div>
      <CalendarWrapper>
        {calendarArray.map(({ day }) => (
          <Day key={day.getTime()} day={day} />
        ))}
      </CalendarWrapper>
    </div>
  );
};
