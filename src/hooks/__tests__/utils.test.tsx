import { createCalendarEmptyArray, getPeriodRangeDate } from "../utils";

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
  // expect(getPeriodRangeDate.month(date)).toMatchObject(outputMonth);
  expect(createCalendarEmptyArray(getPeriodRangeDate.week(date))).toMatchObject(
    emptyWeekCalendarArray
  );
});
