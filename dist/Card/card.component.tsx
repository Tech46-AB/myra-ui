import React, { FC } from 'react';

import Card, { CardProps } from '@material-ui/core/Card';
import './card.styles.scss';

type PropsType = {
    styleClass?: string;
} & CardProps;

const TuiCard: FC<PropsType> = ({ styleClass, elevation, variant, ...res }): JSX.Element => {
    const scssClass = styleClass ? styleClass : 'card-primary';
    return (
        <Card
            className={scssClass}
            elevation={elevation}
            variant={variant || 'outlined'}
            {...res}
        />
    );
};
export { TuiCard as Card };
