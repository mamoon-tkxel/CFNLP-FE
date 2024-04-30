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
    // subheading: {
    //   primary: appBlackLight
    // },
    background: {
      default: "#ffffff",
    },
    text: {
      // primary: primaryText,
      // secondary: secondaryText,

    },
    // primary: {
    //   main: appPrimaryColor,
    // },
    // info: {
    //   main: appPrimaryColor,
    //   light: appBlackcolor
    // },
    // secondary: {
    //   main: appSecondaryColor,
    //   light: appGreyColor
    // },
    // error: {
    //   main: red.A400,
    // },
  },
  typography: {
    fontFamily: ["Archivo", "Archivo Black", "sans-serif"].join(","),
  },

});
theme = responsiveFontSizes(theme);
export default theme;
