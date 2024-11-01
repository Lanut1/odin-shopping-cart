import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#C60000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1E43',
    },
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
  },
})

export default theme;