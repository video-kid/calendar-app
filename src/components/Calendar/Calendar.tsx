import styled from "styled-components";
import { useCalendar } from "../../hooks/useCalendar";
import { displayMode } from "../../types/calendarTypes";
import { EventProps } from "../../types/eventTypes";
import {
  eventsListToCalendarEvents,
  eventToCalendarConverter,
  getCurrentTime,
  getMonthNumber,
} from "../../utils/utils";

import Day from "../Day/Day";

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 50px;
  aspect-ratio: auto 2 / 1;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

type CalendarProps<T> = {
  events: T;
  initialDate?: Date;
  displayMode?: displayMode;
};

export const Calendar = <CustomEventProps extends EventProps>({
  events,
  initialDate = getCurrentTime(),
  displayMode = "month",
}: CalendarProps<Array<CustomEventProps>>): JSX.Element => {
  const {
    selectedDay,
    calendarArray,
    calendarMode,
    changeCalendarMode,
    nextPeriod,
    prevPeriod,
  } = useCalendar();

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
        {eventToCalendarConverter(
          eventsListToCalendarEvents(events),
          calendarArray
        ).map((day) => (
          <Day key={day.day.getTime()} day={day.day} events={day.events} />
        ))}
      </CalendarWrapper>
    </div>
  );
};
