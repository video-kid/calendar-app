import {
  createCalendarDaysArray,
  createCalendarEmptyArray,
  getEmptyCalendar,
  getPeriodRangeDate,
  mergeEventsAndCalendar,
} from "../utils";

const event = {
  id: "666",
  name: "event name 18-19 12 22",
  startTime: "1671395669000",
  endTime: "1671481532000",
};

const date = new Date("2022-12-18T20:00:00.817Z");

const outputMonth = {
  first: new Date("2022-11-26T23:00:00.000Z"),
  last: new Date("2022-12-31T22:59:59.999Z"),
};

const outputWeek = {
  first: new Date("2022-12-17T23:00:00.000Z"),
  last: new Date("2022-12-24T22:59:59.999Z"),
};

test("period range test", () => {
  expect(getPeriodRangeDate.month(date)).toMatchObject(outputMonth);
  expect(getPeriodRangeDate.week(date)).toMatchObject(outputWeek);
});

const emptyWeekCalendarArray = [
  {
    day: new Date("2022-12-17T23:00:00.000Z"),
  },
  {
    day: new Date("2022-12-18T23:00:00.000Z"),
  },
  {
    day: new Date("2022-12-19T23:00:00.000Z"),
  },
  {
    day: new Date("2022-12-20T23:00:00.000Z"),
  },
  {
    day: new Date("2022-12-21T23:00:00.000Z"),
  },
  {
    day: new Date("2022-12-22T23:00:00.000Z"),
  },
  {
    day: new Date("2022-12-23T23:00:00.000Z"),
  },
];

test("creating empty calendar array test", () => {
  expect(createCalendarEmptyArray(getPeriodRangeDate.week(date))).toMatchObject(
    emptyWeekCalendarArray
  );
});

const calendarDaysArrayOutput = [
  {
    day: new Date("2022-12-18T20:00:00.817Z"),
    id: "666",
    name: "event name 18-19 12 22",
    startTime: "1671395669000",
    endTime: "1671481532000",
  },
  {
    day: new Date("2022-12-19T20:00:00.817Z"),
    id: "666",
    name: "event name 18-19 12 22",
    startTime: "1671395669000",
    endTime: "1671481532000",
  },
];

test("creating calendar day with event objects array for given days (2 days here) ", () => {
  expect(createCalendarDaysArray(2, date, event)).toMatchObject(
    calendarDaysArrayOutput
  );
});

const emptyCalendarDayObjectArrayOutput = [
  {
    day: new Date("2022-12-18T20:00:00.817Z"),
  },
  {
    day: new Date("2022-12-19T20:00:00.817Z"),
  },
];

test("creating empty calendar day objects array for given days (2 days here) ", () => {
  expect(createCalendarDaysArray(2, date)).toMatchObject(
    emptyCalendarDayObjectArrayOutput
  );
});

const eventsArray = [event];

const filledCalendarOutput = [
  {
    day: new Date("2022-12-17T23:00:00.000Z"),
    events: {
      "666": {
        day: new Date("2022-12-18T20:34:29.000Z"),
        id: "666",
        name: "event name 18-19 12 22",
        startTime: "1671395669000",
        endTime: "1671481532000",
      },
    },
  },
  {
    day: new Date("2022-12-18T23:00:00.000Z"),
    events: {
      "666": {
        day: new Date("2022-12-19T20:34:29.000Z"),
        id: "666",
        name: "event name 18-19 12 22",
        startTime: "1671395669000",
        endTime: "1671481532000",
      },
    },
  },
  {
    day: new Date("2022-12-19T23:00:00.000Z"),
    events: {},
  },
  {
    day: new Date("2022-12-20T23:00:00.000Z"),
    events: {},
  },
  {
    day: new Date("2022-12-21T23:00:00.000Z"),
    events: {},
  },
  {
    day: new Date("2022-12-22T23:00:00.000Z"),
    events: {},
  },
  {
    day: new Date("2022-12-23T23:00:00.000Z"),
    events: {},
  },
];

test("Complete calendar array for week", () => {
  expect(mergeEventsAndCalendar(eventsArray, "week", date)).toMatchObject(
    filledCalendarOutput
  );
});

test("Complete empty calendar array for week", () => {
  expect(getEmptyCalendar("week", date)).toMatchObject(emptyWeekCalendarArray);
});
