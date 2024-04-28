import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "@emotion/react";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
