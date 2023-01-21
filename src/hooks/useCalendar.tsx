import { useEffect, useState } from "react";
import { DayProps, displayMode } from "../types/calendarTypes";
import { EventProps } from "../types/eventTypes";
import { eventsListToCalendarEvents, getCurrentTime } from "../utils/utils";
import { calendarActions, fillEmptyCalendarWithCalendarEvents } from "./utils";

type settingsProps = {
  display: displayMode;
  initialDate: Date;
};

const defaultSettings: settingsProps = {
  display: "month",
  initialDate: getCurrentTime(),
};

export const useCalendar = <T extends EventProps>(
  events: Array<T>,
  settings: settingsProps = defaultSettings
) => {
  const [calendarMode, setCalendarMode] = useState<displayMode>(
    settings.display
  );
  const [selectedDay, setSelectedDay] = useState<Date>(settings.initialDate);
  const [calendarArray, setCalendarArray] = useState<Array<DayProps<T>>>(
    fillEmptyCalendarWithCalendarEvents(
      eventsListToCalendarEvents(events),
      calendarActions[calendarMode].generateEmptyCalendar(selectedDay)
    )
  );

  const changeCalendarMode = (mode: displayMode) => setCalendarMode(mode);

  const nextPeriod = () => {
    setSelectedDay(calendarActions[calendarMode].nextPeriod(selectedDay));
  };

  const prevPeriod = () => {
    setSelectedDay(calendarActions[calendarMode].prevPeriod(selectedDay));
  };

  const selectDay = (date: Date) => setSelectedDay(date);

  useEffect(() => {
    setCalendarArray(
      fillEmptyCalendarWithCalendarEvents(
        eventsListToCalendarEvents(events),
        calendarActions[calendarMode].generateEmptyCalendar(selectedDay)
      )
    );
  }, [calendarMode, events, selectedDay]);

  return {
    calendarArray,
    calendarMode,
    changeCalendarMode,
    nextPeriod,
    prevPeriod,
    selectDay,
    selectedDay,
  };
};
