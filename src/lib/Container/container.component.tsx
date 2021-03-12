import React, { FC } from 'react';

import Container, { ContainerProps } from '@material-ui/core/Container';

const TuiContainer: FC<ContainerProps> = ({ ...props }) => <Container {...props} />;
export { TuiContainer as Container };
