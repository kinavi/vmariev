import React from 'react';
import { FieldContainer } from './styled';

export const Field = React.memo(
  (props: {
    children: React.JSX.Element | string | number | React.JSX.Element[];
    label: string;
    className?: string;
  }) => {
    const { children, label, className } = props;
    return (
      <FieldContainer className={className}>
        <div className="custom-field__label">{label}</div>
        <div className="custom-field__content">{children}</div>
      </FieldContainer>
    );
  }
);
