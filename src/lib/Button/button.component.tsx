import React, { FC } from "react";

import Button, { ButtonProps } from "@material-ui/core/Button";
import "./button.styles.scss";

type PropsType = {
  styleClass?: string;
} & ButtonProps;

const TuiButton: FC<PropsType> = ({ styleClass, ...res }): JSX.Element => {
  const scssClass = styleClass ? `tui-btn ${styleClass}` : "tui-btn";
  return <Button className={scssClass} variant="outlined" {...res} />;
};
export { TuiButton as Button };
