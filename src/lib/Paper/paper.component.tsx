import React, { FC } from 'react';

import Paper, { PaperProps } from '@material-ui/core/Paper';
import './paper.styles.scss';

type PropsType = {
    styleClass?: string;
} & PaperProps;

const TuiPaper: FC<PropsType> = ({ styleClass, elevation, variant, ...res }): JSX.Element => {
    const scssClass = styleClass ? styleClass : 'paper-primary';
    return (
        <Paper
            className={scssClass}
            elevation={elevation || 0}
            variant={variant || 'outlined'}
            {...res}
        />
    );
};
export { TuiPaper as Paper };
