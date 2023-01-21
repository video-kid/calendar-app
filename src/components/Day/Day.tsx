import { intlFormat } from "date-fns";
import styled from "styled-components";
import { DayProps } from "../../types/calendarTypes";
import Event from "../Event/Event";

const DayWrapper = styled.div`
  display: flex;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const Day = <T extends {}>({ day, events = null, ...props }: DayProps<T>) => {
  return (
    <>
      <DayWrapper {...props}>
        {intlFormat(day, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        {events &&
          Object.values(events).map((event, key) => (
            <Event event={event} key={`${day}-${key}`} />
          ))}
      </DayWrapper>
    </>
  );
};

export default Day;
