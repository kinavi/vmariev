import React from 'react';
import { EditModePropsType } from '../types';
import { Button } from '../../UI/Button';
import { TaskField } from '../../UI/TaskField';
import { Icons } from '../../UI/Icons';
import { observer } from 'mobx-react-lite';
import { Icon } from '../../../../../ui/components/Icon';

export const EditMode = observer((props: EditModePropsType) => {
  const {
    leftIcon,
    onSave,
    onRemove,
    task: { name, updateName, toggleIsreadonly },
  } = props;

  return (
    <div className="task__body task__body_edit">
      <Button
        mix="task__button task__left-button task__left-button_edit"
        onClick={() => toggleIsreadonly(true)}
      >
        {leftIcon}
      </Button>
      <TaskField
        iconLeft={Icons.trash}
        iconRight={
          <Icon
            type="Check"
            size="16px"
            color="black"
          />
        }
        value={name}
        onChange={updateName}
        onSave={() => onSave(props.task)}
        onRemove={onRemove}
        placeholder="Название"
      />
    </div>
  );
});
