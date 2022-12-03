import { addMonths, subMonths } from "date-fns";
import { useState } from "react";
import { DayProps, displayMode } from "../types/calendarTypes";
import { getCurrentTime } from "../utils/utils";
import { createMonthlyArray } from "./utils";

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
  const [calendarObject, setCalendarObject] = useState<Array<DayProps>>(
    createMonthlyArray(selectedDay)
  );

  const changeCalendarMode = (mode: displayMode) => setCalendarMode(mode);

  const changeMonth = (newSelectedDate: Date) => {
    setSelectedDay(newSelectedDate);
    setCalendarObject(createMonthlyArray(newSelectedDate));
  };

  const nextPeriod = () => {
    changeMonth(addMonths(selectedDay, 1));
  };

  const prevPeriod = () => {
    changeMonth(subMonths(selectedDay, 1));
  };

  const selectDay = (date: Date) => setSelectedDay(date);

  return {
    calendarObject,
    calendarMode,
    changeCalendarMode,
    nextPeriod,
    prevPeriod,
    selectDay,
    selectedDay,
  };
};
