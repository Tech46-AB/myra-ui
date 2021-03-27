import React, { FC } from "react";
import { StylesProvider } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import "./card.styles.scss";
import { CardProps } from "@material-ui/core/Card";

export type MuiCardProps = CardProps;

const MyraCard: FC<MuiCardProps> = ({ className, ...res }): JSX.Element => {
  return (
    <StylesProvider injectFirst>
      <Card className={`${className && className} myra--card`} {...res} />
    </StylesProvider>
  );
};
export { MyraCard as Card };
