import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

const ThemeProvider: React.FC<{}> = (props) => (
  <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>
);

export default ThemeProvider;
