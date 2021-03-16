import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";
import { jsVariables } from "../../variables";

const lightTheme: ThemeOptions = createMuiTheme({
  palette: {
    primary: {
      main: jsVariables.primaryColor,
      light: jsVariables.secondaryColor,
    },
    secondary: {
      main: jsVariables.secondaryColor,
      light: jsVariables.primaryColor,
    },
  },
  typography: {
    fontFamily: jsVariables.fontFamily,
    h1: {
      fontSize: jsVariables.heading1,
    },
    h2: {
      fontSize: jsVariables.heading2,
    },
    h3: {
      fontSize: jsVariables.heading3,
    },
    body1: {
      fontSize: jsVariables.body1,
    },
  },
  props: {
    MuiTextField: {
      style: {
        borderColor: "none",
      },
    },
  },
});

export { lightTheme };
