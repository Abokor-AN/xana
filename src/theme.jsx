import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    text: {
      main: "#eeeded",
    },
    background: {
      main: "#212121",
    },
    primary: {
      main: "#c9b6b6",
      contrastText: "#212121",
    },
    secondary: {
      main: "#6b4747",
      contrastText: "#eeeded",
    },
    accent: {
      main: "#af7979",
      contrastText: "#212121",
    },
  },
});

export default theme;
