import {
  dateToEpoch,
  eventsListToCalendarEvents,
  getDateDetails,
  getMonthNumber,
  spreadEventsToUnorderedEventDayArray,
} from "../utils";

const date = new Date("2022-12-18T20:00:00.817Z");

const event = {
  id: "666",
  name: "event name 18-19 12 22",
  startTime: "1671395669000",
  endTime: "1671481532000",
};

const events = [event];

test("date to epoch", () => {
  expect(dateToEpoch(date)).toBe(1671393600817);
});

test("month numer", () => {
  expect(getMonthNumber(date)).toBe("12");
});

const dateDetailsOutput = {
  year: "2022",
  month: "12",
  day: "18",
};

test("date to date details object", () => {
  expect(getDateDetails(date)).toMatchObject(dateDetailsOutput);
});

const eventsListToCalendarEventsOutput = {
  "2022": {
    "12": {
      "18": {
        "666": {
          day: new Date("2022-12-18T20:34:29.000Z"),
          id: "666",
          name: "event name 18-19 12 22",
          startTime: "1671395669000",
          endTime: "1671481532000",
        },
      },
      "19": {
        "666": {
          day: new Date("2022-12-19T20:34:29.000Z"),
          id: "666",
          name: "event name 18-19 12 22",
          startTime: "1671395669000",
          endTime: "1671481532000",
        },
      },
    },
  },
};

test("make calendar object structure with given event", () => {
  expect(eventsListToCalendarEvents(events)).toMatchObject(
    eventsListToCalendarEventsOutput
  );
});

const spreadedEventsIntoDaysArray = [
  {
    day: new Date("2022-12-18T20:34:29.000Z"),
    id: "666",
    name: "event name 18-19 12 22",
    startTime: "1671395669000",
    endTime: "1671481532000",
  },
  {
    day: new Date("2022-12-19T20:34:29.000Z"),
    id: "666",
    name: "event name 18-19 12 22",
    startTime: "1671395669000",
    endTime: "1671481532000",
  },
];

test("convert event into day-events object array", () => {
  expect(spreadEventsToUnorderedEventDayArray(events)).toMatchObject(
    spreadedEventsIntoDaysArray
  );
});
