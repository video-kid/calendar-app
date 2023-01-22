import { useCalendar } from "../../hooks/useCalendar";
import { displayMode } from "../../types/calendarTypes";
import { EventProps } from "../../types/eventTypes";
import { getCurrentTime } from "../../utils/utils";
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
  } = useCalendar(events);

  return (
    <div>
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
        {calendarArray.map((day) => (
          <Day key={day.day.getTime()} day={day.day} events={day.events} />
        ))}
      </CalendarWrapper>
    </div>
  );
};
