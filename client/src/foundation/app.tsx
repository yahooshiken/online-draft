import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ThemeProvider from "./theme";
import Routes from "./routes";

const App: FC = () => (
  <ThemeProvider>
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default App;
