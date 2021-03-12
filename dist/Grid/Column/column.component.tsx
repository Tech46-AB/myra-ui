import React, { FC } from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';

const TuiColumn: FC<GridProps> = ({ ...props }) => <Grid direction="column" container {...props} />;

export { TuiColumn as Column };
