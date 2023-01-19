import styled from "styled-components";
import { DayProps } from "../../types/calendarTypes";
import Event from "../Event/Event";

const DayWrapper = styled.div`
  display: flex;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const Day = ({ day, events = {}, ...props }: DayProps) => {
  return (
    <>
      <DayWrapper {...props}>
        {Object.values(events).map((event, key) => (
          <Event event={event} key={`${day}-${key}`} />
        ))}
      </DayWrapper>
    </>
  );
};

export default Day;
