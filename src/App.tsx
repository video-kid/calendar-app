import GlobalStyle from "./themes/globalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/themes";
import { Calendar } from "./components/Calendar/Calendar";
import { EventCalendarProps, EventProps } from "./types/eventTypes";
import { eventsListToCalendarEvents } from "./utils/utils";

interface customEventProps extends EventProps {
  type: string;
  id: string;
}

const eventsList = [
  {
    id: "0",
    name: "start end  8 January 2023 ",
    type: "x",
    startTime: "1673200681000",
    endTime: "1673200681000",
  },
  {
    id: "1",
    name: "start 2.1 end 4.1 ",
    type: "x",
    startTime: "1672682281000",
    endTime: "1672855081000",
  },
  {
    id: "3",
    name: "start end 1 January 2023 ",
    type: "x",
    startTime: "1672595881000",
    endTime: "1672595881000",
  },
  {
    id: "666",
    name: "start 8jan end 1 feb 2023 ",
    type: "x",
    startTime: "1673200681000",
    endTime: "1675282227000",
  },
];

const eventsMockup: EventCalendarProps<customEventProps> = {
  "2022": {
    "12": {
      "6": {
        eventk0: {
          id: "0",
          name: "event0",
          type: "x",
          startTime: "xx",
          endTime: "xxx",
        },
      },
      "8": {
        eventk1: {
          id: "1",
          name: "event1",
          type: "x",
          startTime: "xx",
          endTime: "xxx",
        },
        eventk2: {
          id: "2",
          name: "event2",
          type: "x",
          startTime: "xx",
          endTime: "xxx",
        },
      },
    },
  },
};

const App = () => {
  console.log(eventsListToCalendarEvents(eventsList));

  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Calendar events={eventsMockup} />
      </ThemeProvider>
    </div>
  );
};

export { App };
