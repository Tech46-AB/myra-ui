import React, { FC } from "react";
import Divider, { DividerProps } from "@material-ui/core/Divider";
import { StylesProvider } from "@material-ui/core/styles";

const MyraDivider: FC<DividerProps> = ({ className, ...rest }) => {
  return (
    <StylesProvider injectFirst>
      <Divider className={className && className} {...rest} />
    </StylesProvider>
  );
};

export { MyraDivider as Divider };
