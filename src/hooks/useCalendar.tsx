import { addMonths, addWeeks, subMonths, subWeeks } from "date-fns";
import { useEffect, useState } from "react";
import { DayProps, displayMode } from "../types/calendarTypes";
import { getCurrentTime } from "../utils/utils";
import { createMonthlyArray, createWeeklyArray } from "./utils";

type settingsProps = {
  display: displayMode;
  initialDate: Date;
};

const defaultSettings: settingsProps = {
  display: "month",
  initialDate: getCurrentTime(),
};

const calendarActions = {
  month: {
    generateCalendar(day: Date) {
      return createMonthlyArray(day);
    },
    nextPeriod(day: Date) {
      return addMonths(day, 1);
    },
    prevPeriod(day: Date) {
      return subMonths(day, 1);
    },
  },
  week: {
    generateCalendar(day: Date) {
      return createWeeklyArray(day);
    },
    nextPeriod(day: Date) {
      return addWeeks(day, 1);
    },
    prevPeriod(day: Date) {
      return subWeeks(day, 1);
    },
  },
};

export const useCalendar = (settings: settingsProps = defaultSettings) => {
  const [calendarMode, setCalendarMode] = useState<displayMode>(
    settings.display
  );
  const [selectedDay, setSelectedDay] = useState<Date>(settings.initialDate);
  const [calendarArray, setCalendarArray] = useState<Array<DayProps>>(
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
