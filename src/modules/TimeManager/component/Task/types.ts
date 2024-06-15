import { Task } from '../../mobx/models/Task';

export type EditModePropsType = {
  leftIcon: JSX.Element;
  onSave(updatedTask: Task): void;
  onRemove(): void;
  task: Task;
  isReadonly?: boolean;
};

export type ViewModePropsType = {
  onEditTask(task: Task): void;
  onStart(): void;
  onClick(): void;
  task: Task;
  isReadonly?: boolean;
};

export type WithModePropsType = {
  isReadonly?: boolean;
  onSave(updatedTask: Task): void;
  onRemove(): void;
  task: Task;
} & ViewModePropsType;

export type ComponentType = {
  View: (props: ViewModePropsType) => JSX.Element;
  Edit: (props: EditModePropsType) => JSX.Element;
};

export type WithTracksPropsType = {
  mix: string;
} & WithModePropsType;
