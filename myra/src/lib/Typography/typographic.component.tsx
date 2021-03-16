import React, { FC } from "react";
import {
  Typography,
  TypographyProps,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core";
import { lightTheme } from "../theme";

type PropsType = TypographyProps;

const MyraTypography: FC<PropsType> = ({ className, ...props }) => (
  <MuiThemeProvider theme={lightTheme}>
    <StylesProvider injectFirst>
      <Typography {...props} className={className} />
    </StylesProvider>
  </MuiThemeProvider>
);

export { MyraTypography as Typography };
