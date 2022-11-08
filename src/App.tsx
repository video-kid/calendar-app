import GlobalStyle from "./themes/globalStyles";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/themes";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>empty</ThemeProvider>
    </div>
  );
};

const add = (first: number, second: number): number => first + second;

export { App, add };
