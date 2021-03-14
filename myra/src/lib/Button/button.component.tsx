import React, { FC } from "react";
import { StylesProvider } from "@material-ui/core/styles";

import Button, { ButtonProps } from "@material-ui/core/Button";
import "./button.styles.scss";

/**
 *
 *
 * @param {PropsType} {
 *   variant,
 *   className,
 *   ...res
 * }
 * @returns {JSX.Element}
 */

const TuiButton: FC<ButtonProps> = ({
  variant,
  className,
  ...res
}): JSX.Element => {
  const cssClass = className
    ? `${className && className} myra--primary`
    : "myra--primary";
  return (
    <StylesProvider injectFirst>
      <Button className={cssClass} variant={variant || "outlined"} {...res} />
    </StylesProvider>
  );
};
export { TuiButton };
