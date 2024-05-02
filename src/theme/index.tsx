import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import { red } from "@mui/material/colors";
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
      // xxl: 1920,
    },
  },
  palette: {
  
    background: {
      default: "#ffffff",
    },
    text: {
      // primary: primaryText,
      // secondary: secondaryText,

    },

  },
  typography: {
    fontFamily: ["Archivo", "Archivo Black", "sans-serif"].join(","),
  },
  components:{
    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '0.75rem',
          borderRadius: '27px'
        }
      }
    },
  }

});
theme = responsiveFontSizes(theme);
export default theme;
