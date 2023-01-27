import { intlFormat } from "date-fns";
import { DayProps } from "../../types/calendarTypes";
import { EventProps } from "../../types/eventTypes";
import Event from "../Event/Event";
import { DayIdentifier, DayWrapper, EventsWrapper } from "./Day.styled";

const Day = <T extends EventProps>({
  day,
  events = null,
  ...props
}: DayProps<T>) => {
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
