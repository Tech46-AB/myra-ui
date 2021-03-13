import React, { FC } from "react";
import { StylesProvider } from "@material-ui/core/styles";

import Button, { ButtonProps } from "@material-ui/core/Button";
import "./button.styles.scss";

type PropsType = ButtonProps;

const TuiButton: FC<PropsType> = ({
  variant,
  className,
  ...res
}): JSX.Element => {
    const cssClass = className ? `${className && className} tui-btn` : 'tui-btn'
  return (
    <StylesProvider injectFirst>
      <Button
        className={cssClass}
        variant={variant || "outlined"}
        {...res}
      />
    </StylesProvider>
  );
};
export { TuiButton };
