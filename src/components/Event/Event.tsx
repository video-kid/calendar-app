import React from "react";

const Event = ({ event = { name: "a" } }: { event: any }) => {
  return <> {event.name}</>;
};

export default Event;
