import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: "#1c1c1c", //  Dark Grey
      secondary: "#7d7878", // Light Grey
    },
    primary: {
      main: "#007873", //Green
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#007873",
    },
    common: {
      white: "#ffffff",
    },
    success: {
      main: "#11C6A9", // custom button color (seafoam green)
      contrastText: "#ffffff", // custom button text (white)
    },
    error: {
      main: "#C6112E", // custom button color (red)
    },
    info: {
      main: "#1c1c1c",
    },
  },

  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: 60,
      fontWeight: "lighter",
    },
    h2: {
      fontSize: 48,
      fontWeight: "lighter",
    },
    h3: {
      fontSize: 34,
      fontWeight: "normal",
    },
    h4: {
      fontSize: 24,
      fontWeight: "normal",
    },
    h5: {
      fontSize: 20,
      fontWeight: "normal",
    },
    h6: {
      fontSize: 16,
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: "normal",
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: "bold",
    },
    body1: {
      fontSize: 16,
      fontWeight: "normal",
    },
    body2: {
      fontSize: 14,
      fontWeight: "normal",
    },
    caption: {
      fontSize: 12,
      fontWeight: "normal",
    },
  },
});