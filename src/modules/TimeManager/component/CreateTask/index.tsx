import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import { Button } from '../UI/Button';
import { TaskField } from '../UI/TaskField';
import { Icons } from '../UI/Icons';
import { Icon } from '../../../../ui/components/Icon';

export type CreateModePropsType = {
  onCreate(value: string): void;
  mix?: string;
};

export const CreateTask = (props: CreateModePropsType) => {
  const { mix, onCreate } = props;

  const [value, setValue] = useState('');
  const [isShowCreateForm, setShowCreateForm] = useState(false);

  const switchFormState = useCallback(
    () => setShowCreateForm(!isShowCreateForm),
    [isShowCreateForm]
  );

  const renderAddButton = () => (
    <Button
      mix="create-task__add-button"
      onClick={switchFormState}
    >
      {Icons.plus}
    </Button>
  );

  const renderCreateForm = () => (
    <div className={classnames(mix, 'task__container')}>
      <div className="task__body">
        <Button
          mix="task__button task__left-button_edit"
          onClick={switchFormState}
        >
          {Icons.cross}
        </Button>
        <TaskField
          iconRight={
            <Icon
              type="Check"
              size="16px"
              color="black"
            />
          }
          value={value}
          onChange={(value: string) => setValue(value)}
          onSave={() => {
            onCreate(value);
            switchFormState();
          }}
          placeholder="Название"
        />
      </div>
    </div>
  );

  return (
    <div className="create-task__container">
      {isShowCreateForm ? renderCreateForm() : renderAddButton()}
    </div>
  );
};
