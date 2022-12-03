import GlobalStyle from "./themes/globalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/themes";
import { Calendar } from "./components/Calendar/Calendar";
import {
  EventCalendarProps,
  EventProps,
  EventsProps,
} from "./types/eventTypes";

const eventsMockup: EventCalendarProps<EventProps> = {
  "2022": {
    "12": {
      "8": {
        eventk1: {
          name: "event1",
          type: "x",
          startDate: "xx",
          endDate: "xxx",
        },
        eventk2: {
          name: "event2",
          type: "x",
          startDate: "xx",
          endDate: "xxx",
        },
      },
    },
  },
};

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Calendar events={eventsMockup} />
      </ThemeProvider>
    </div>
  );
};

const add = (first: number, second: number): number => first + second;

export { App, add };
