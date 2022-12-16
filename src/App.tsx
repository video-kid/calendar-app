import GlobalStyle from "./themes/globalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/themes";
import { Calendar } from "./components/Calendar/Calendar";
import { EventCalendarProps, EventProps } from "./types/eventTypes";

interface customEventProps extends EventProps {
  type: string;
  id: string;
}

const eventsMockup: EventCalendarProps<customEventProps> = {
  "2022": {
    "12": {
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
