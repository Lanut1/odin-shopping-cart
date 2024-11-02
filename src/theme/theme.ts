import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      almond: string;
      paper: string;
      background: string;
    }
  }

  interface PaletteOptions {
    customColors?: {
      // beige: string;
      // raw: string;
      almond: string;
      paper: string;
      background: string;
      // success: string;
      // error: string;
      // warning: string;
      // textPrimary: string;
      // textSecondary: string;
      // textLight: string;
      // gold: string;
      // darkBrown: string;
      // lightBrown: string;
    }
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#C60000',
      contrastText: '#ffffff',
    },
    customColors: {
      almond: '#FFEBCD',
      paper: 'rgba(255, 255, 255, 0.8)',
      background: 'rgba(254, 242, 228, 0.1)',
      // background: '#000000'
    }
  },
  typography: {
    fontFamily: '"Helvetica", "Arial", sans-serif',
  },
})

export default theme;