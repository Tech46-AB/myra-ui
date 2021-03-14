import React, { FC } from "react";
import { StylesProvider } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import "./button.styles.scss";
import { ButtonProps } from "@material-ui/core/Button";

export type MuiButtonProps = ButtonProps;

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

const MyraButton: FC<MuiButtonProps> = ({
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
export { MyraButton as Button };
