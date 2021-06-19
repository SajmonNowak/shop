import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  fontSizes: {
    verySmall: "12px",
    small: "16px",
    medium: "22px",
    big: "32px",
    large: "48px",
  },

  color: {
    primary: "#59606d",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
