import { ThemeProvider } from "styled-components";
import React from "react";

const theme = {
  fontSizes: {
    small: "16px",
    medium: "22px",
    large: "32px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
