import React from 'react';
import classNames from 'classnames';
import { FieldPropsType } from '../../types';
import { Button } from '../../../Button';
import { FieldContainer } from '../../styled';
import { Icon } from '../../../Icon';
import { Tooltip } from '../../../Tooltip';

export const ColumnPatternField = (props: FieldPropsType) => {
  const {
    required,
    label,
    error,
    children,
    info,
    onEdit,
    className,
    subLabel,
    size = 'm',
    pattern = 'column',
    hint,
    counter,
    maxCounter,
  } = props;

  const renderRequiredMark = () =>
    required ? <span style={{ color: '#FF5C6C' }}>&#42;</span> : '';
  const labelMix = classNames('field__label', `field__label_size-${size}`);
  const renderCounter = () => {
    if (counter === undefined || maxCounter === undefined) {
      return null;
    }
    return <div className="field__counter">{`${counter}/${maxCounter}`}</div>;
  };
  return (
    <FieldContainer
      pattern={pattern}
      className={className || ''}
    >
      {(!!label || !!subLabel) && (
        <div className="field__header-container">
          {!!label && (
            <div className="field__label-container">
              <div className={labelMix}>
                <span>
                  {label} {renderRequiredMark()}
                </span>
                {hint && (
                  <Tooltip
                    position="right"
                    content={hint}
                    className="field__hint"
                  >
                    ?
                    {/* <Icon
                      color="#A2AAB8"
                      size="12px"
                      type="QuestionFiller"
                    /> */}
                  </Tooltip>
                )}
              </div>
              {/* {onEdit && (
                <Button
                  onClick={onEdit}
                  pattern="link"
                >
                  Изменить
                </Button>
              )} */}
              {renderCounter()}
            </div>
          )}
          {!!subLabel && <div className="field__sub-label">{subLabel}</div>}
        </div>
      )}
      <div className="field__body">{children}</div>
      {!!error && <div className="field__error">{error}</div>}
      {!!info && <div className="field__info">{info}</div>}
    </FieldContainer>
  );
};
