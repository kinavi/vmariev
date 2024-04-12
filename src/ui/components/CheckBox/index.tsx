import React, { useContext } from 'react';
import { Container } from './styled';
import { CheckBoxPropsType } from './types';
import { ThemeContext } from '../../context/ThemeContext';

export const CheckBox = (props: CheckBoxPropsType) => {
  const {
    value,
    onChange,
    label,
    isDisable,
    id,
    className,
    direction = 'right',
    sizeIndicator = '16',
    labelClass,
    ...other
  } = props;

  const handleChange = (event: any) => {
    onChange(event.target.checked);
  };

  const theme = useContext(ThemeContext);

  const _id = `check-box_${label}_${id}`;

  return (
    <Container
      sizeIndicator={sizeIndicator}
      direction={direction}
      notMargin={!label}
      className={className}
      theme={theme || {}}
      {...other}
    >
      <input
        type="checkbox"
        id={_id}
        onChange={handleChange}
        checked={value}
        disabled={isDisable}
      />
      <label
        className={labelClass}
        htmlFor={_id}
      >
        {label}
      </label>
    </Container>
  );
};
