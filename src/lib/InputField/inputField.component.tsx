import React, { FC } from 'react';

import { TextField, TextFieldProps } from '@material-ui/core';
import './inputField.styles.scss';

type PropsType = {
    styleClass?: string;
} & TextFieldProps;

const InputField: FC<PropsType> = ({ styleClass, variant, ...rest }) => {
    const scssClass = styleClass ? `inputField ${styleClass}` : 'inputField';
    return <TextField className={scssClass} variant={variant || 'outlined'} {...rest} />;
};

export { InputField };
