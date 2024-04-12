import React from 'react';
import { FieldPropsType } from '../../types';
import styled from 'styled-components';
import { FieldContainer } from '../../styled';
import classNames from 'classnames';

const RowPatternFieldContainer = styled(FieldContainer)`
  & .field {
    &__label {
      width: 96px;
    }
    &__required-mark {
      color: hsla(217, 13%, 52%, 1);
    }
    &__content-wrapper {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
`;

export const RowPatternField = (props: FieldPropsType) => {
  const {
    children,
    error,
    info,
    label,
    pattern = 'row',
    required,
    size,
    className,
  } = props;
  const renderRequiredMark = () =>
    required ? <span className="field__required-mark">&#42;</span> : '';
  const labelMix = classNames('field__label', `field__label_size-${size}`);

  return (
    <RowPatternFieldContainer className={className} pattern={pattern}>
      {label && (
        <div className={labelMix}>
          {label} {renderRequiredMark()}
        </div>
      )}
      <div className="field__content-wrapper">
        {children}
        {!!error && <div className="field__error">{error}</div>}
        {!!info && <div className="field__info">{info}</div>}
      </div>
    </RowPatternFieldContainer>
  );
};
