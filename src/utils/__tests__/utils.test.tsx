import { getPeriodRangeDate } from "../utils";

const date = new Date(2022, 12, 18);

const output = {
  first: new Date("2022-11-26T23:00:00.000Z"),
  last: new Date("2022-12-31T22:59:59.999Z"),
};

test("period range test", () => {
  expect(getPeriodRangeDate.month(date)).toMatchObject(output);
});
