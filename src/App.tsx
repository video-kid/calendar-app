import GlobalStyle from "./themes/globalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/themes";
import Calendar from "./components/Calendar/Calendar";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Calendar />
      </ThemeProvider>
    </div>
  );
};

const add = (first: number, second: number): number => first + second;

export { App, add };
