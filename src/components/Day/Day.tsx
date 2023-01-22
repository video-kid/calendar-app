import { intlFormat } from "date-fns";
import { DayProps } from "../../types/calendarTypes";
import Event from "../Event/Event";
import { DayIdentifier, DayWrapper, EventsWrapper } from "./Day.styled";

const Day = <T extends {}>({ day, events = null, ...props }: DayProps<T>) => {
  return (
    <DayWrapper {...props}>
      <EventsWrapper>
        {events &&
          Object.values(events).map((event, key) => (
            <Event event={event} key={`${day}-${key}`} />
          ))}
      </EventsWrapper>
      <DayIdentifier>
        {intlFormat(day, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </DayIdentifier>
    </DayWrapper>
  );
};

export default Day;
