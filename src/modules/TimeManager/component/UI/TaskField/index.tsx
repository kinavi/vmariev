import React from 'react';
import { Button } from '../Button';
import { TaskFieldPropsType } from './types';

import './index.sass';
import { observer } from 'mobx-react-lite';

export const TaskField = observer((props: TaskFieldPropsType): JSX.Element => {
  const {
    onChange,
    value,
    onSave,
    onRemove = () => {},
    iconRight,
    iconLeft = '',
    placeholder = '',
  } = props;

  return (
    <div className="task-field__container">
      <Button
        onClick={onRemove}
        mix="task-field__left-button"
        isHidden={!iconLeft}
      >
        {iconLeft}
      </Button>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="task-field__input"
        placeholder={placeholder}
      />
      {iconRight && (
        <Button
          onClick={onSave}
          mix="task-field__right-button"
        >
          {iconRight}
        </Button>
      )}
    </div>
  );
});
