import { useEffect, useState } from "react";
import { displayMode, EmptyDayProps } from "../types/calendarTypes";
import { getCurrentTime } from "../utils/utils";
import { calendarActions } from "./utils";

type settingsProps = {
  display: displayMode;
  initialDate: Date;
};

const defaultSettings: settingsProps = {
  display: "month",
  initialDate: getCurrentTime(),
};

export const useCalendar = (settings: settingsProps = defaultSettings) => {
  const [calendarMode, setCalendarMode] = useState<displayMode>(
    settings.display
  );
  const [selectedDay, setSelectedDay] = useState<Date>(settings.initialDate);
  const [calendarArray, setCalendarArray] = useState<Array<EmptyDayProps>>(
    calendarActions[calendarMode].generateCalendar(selectedDay)
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
      calendarActions[calendarMode].generateCalendar(selectedDay)
    );
  }, [calendarMode, selectedDay]);

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
