"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    text: {
      main: "#121111",
    },
    background: {
      main: "#dedede",
    },
    primary: {
      main: "#493636",
      contrastText: "#dedede",
    },
    secondary: {
      main: "#b89494",
      contrastText: "#121111",
    },
    accent: {
      main: "#865050",
      contrastText: "#dedede",
    },
  },
});

export default theme;
