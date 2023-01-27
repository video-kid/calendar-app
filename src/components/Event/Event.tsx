import { EventProps } from "../../types/eventTypes";
import { EventWrapper } from "./Event.styled";

type EventTypes = { event: EventProps };

const Event = ({ event }: EventTypes) => {
  return <EventWrapper>{event.name}</EventWrapper>;
};

export default Event;
