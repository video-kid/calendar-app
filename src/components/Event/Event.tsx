import { EventWrapper } from "./Event.styled";

const Event = ({ event = { name: "a" } }: { event: any }) => {
  return <EventWrapper> {event.name}</EventWrapper>;
};

export default Event;
