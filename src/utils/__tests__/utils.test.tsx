import { dateToEpoch, getDateDetails, getMonthNumber } from "../utils";

const date = new Date("2022-12-18T20:00:00.817Z");

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
