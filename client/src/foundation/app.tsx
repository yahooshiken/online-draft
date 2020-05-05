import React, { FC, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import io from "socket.io-client";

import ThemeProvider from "./theme";
import GlobalStyles from "./global_styles";
import Routes from "./routes";
import { configureStore } from "./flux/store";

const App: FC = () => {
  const store = configureStore();
  useEffect(() => {
    io();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
