import React, { FC } from "react";
import { Typography, TypographyProps } from "@material-ui/core";
type PropsType = {
  styleClass?: string;
} & TypographyProps;
const MyraTypography: FC<PropsType> = ({ ...props }) => (
  <Typography {...props} />
);

export { MyraTypography as Typography };
