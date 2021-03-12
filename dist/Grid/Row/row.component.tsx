import React, { ReactElement, FC } from 'react';

import Grid, { GridProps } from '@material-ui/core/Grid';
import './row.styles.scss';

type PropsType = {
    styleClass?: string;
} & GridProps;

const TuiRow: FC<PropsType> = ({ styleClass, ...rest }): ReactElement => {
    const scssClass = styleClass ? `row ${styleClass}` : 'row';
    return <Grid container direction="row" className={scssClass} {...rest} />;
};
export { TuiRow as Row };
