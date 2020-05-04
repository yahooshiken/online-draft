import React, { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import ThemeProvider from "./theme";
import Routes from "./routes";
import { configureStore } from "./flux/store";

const App: FC = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
