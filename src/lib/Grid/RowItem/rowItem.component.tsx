import React, { ReactElement, FC } from 'react';

import { GridProps, Grid } from '@material-ui/core';
import './rowItem.styles.scss';

type PropsType = {
    styleClass?: string;
} & GridProps;

const TuiRowItem: FC<PropsType> = ({ styleClass, ...rest }): ReactElement => {
    const scssClass = styleClass ? `row-item ${styleClass}` : 'row-item';
    return <Grid item className={scssClass} {...rest} />;
};
export { TuiRowItem as RowItem };
