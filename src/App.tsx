import GlobalStyle from "./themes/globalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/themes";
import { Calendar } from "./components/Calendar/Calendar";
import { EventProps } from "./types/eventTypes";
import Day from "./components/Day/Day";

interface customEventProps extends EventProps {
  type: string;
}

const eventsList: Array<customEventProps> = [
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
    name: "asdfgstart 8 january end 7 febulary 2023 lorem ips",
    type: "x",
    startTime: "1673200681000",
    endTime: "1675800014000",
  },
];

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={mainTheme}>
      <Calendar events={eventsList} DayCard={Day} />
    </ThemeProvider>
  </>
);

export { App };
