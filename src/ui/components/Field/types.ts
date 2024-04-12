export type FieldPropsType = {
  label?: string;
  subLabel?: string;
  hint?: string | JSX.Element;
  error?: string;
  info?: string;
  required?: boolean;
  onEdit?(): void;
  className?: string;
  children: JSX.Element | JSX.Element[] | number | string;
  size?: 'm' | 'l';
  pattern?: 'row' | 'column';
  counter?: number;
  maxCounter?: number;
};
