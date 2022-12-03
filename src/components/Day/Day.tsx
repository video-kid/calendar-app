import { intlFormat } from "date-fns";
import styled from "styled-components";
import { DayProps } from "../../types/calendarTypes";

const DayWrapper = styled.div`
  display: flex;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const Day = ({ day, ...props }: DayProps) => {
  return (
    <DayWrapper {...props}>
      {intlFormat(day, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </DayWrapper>
  );
};

export default Day;
