import { useCalendar } from "../../hooks/useCalendar";
import { DayProps, displayMode } from "../../types/calendarTypes";
import { EventProps } from "../../types/eventTypes";
import { dateToEpoch, getCurrentTime } from "../../utils/utils";
import Button from "../Button/Button";

import Day from "../Day/Day";
import {
  CalendarDashboard,
  CalendarWrapper,
  DisplayOptionsWrapper,
  OptionWrapper,
  PageWrapper,
} from "./Calendar.styled";

type CalendarProps<T> = {
  events: T;
  initialDate?: Date;
  displayMode?: displayMode;
  DayCard?: <T extends EventProps>({
    day,
    events,
    ...props
  }: DayProps<T>) => JSX.Element;
};

export const Calendar = <CustomEventProps extends EventProps>({
  events,
  initialDate = getCurrentTime(),
  displayMode = "month",
  DayCard = Day,
}: CalendarProps<Array<CustomEventProps>>): JSX.Element => {
  const {
    selectedDay,
    calendarArray,
    calendarMode,
    changeCalendarMode,
    nextPeriod,
    prevPeriod,
    periodRange,
  } = useCalendar(events);

  const truncatEvents = <T extends EventProps>(events: Array<T>): Array<T> => {
    const stop = dateToEpoch(periodRange.first);
    const start = dateToEpoch(periodRange.last);
    return events.filter(
      ({ startTime, endTime }) =>
        parseInt(startTime) < start && parseInt(endTime) > stop
    );
  };

  return (
    <>
      <CalendarDashboard>
        <PageWrapper>
          <Button onClick={prevPeriod}>{`<`}</Button>
          <span>
            {selectedDay.toLocaleString("default", { month: "long" })}
          </span>
          <Button onClick={nextPeriod}>{`>`}</Button>
        </PageWrapper>
        <DisplayOptionsWrapper>
          <OptionWrapper>
            <input
              type="radio"
              id="month"
              name="period"
              value="month"
              onChange={(e) =>
                changeCalendarMode(e.target.value as displayMode)
              }
              defaultChecked={calendarMode === "month"}
            />
            <label htmlFor="month">month</label>
          </OptionWrapper>
          <OptionWrapper>
            <input
              type="radio"
              id="week"
              name="period"
              value="week"
              onChange={(e) =>
                changeCalendarMode(e.target.value as displayMode)
              }
              defaultChecked={calendarMode === "week"}
            />
            <label htmlFor="week">week</label>
          </OptionWrapper>
        </DisplayOptionsWrapper>
      </CalendarDashboard>
      <CalendarWrapper>
        {calendarArray.map(({ day, events }) => (
          <DayCard key={day.getTime()} day={day} events={events} />
        ))}
      </CalendarWrapper>
    </>
  );
};
