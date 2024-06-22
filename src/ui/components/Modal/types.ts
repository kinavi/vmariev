export type HeaderPropsType = {
  title?: string;
  onClose?(): void;
  isDisable?: boolean;
  onBack?(): void;
  info?: string | JSX.Element;
  RightPrefix?: JSX.Element;
  className?: string;
  pattern?: 'white' | 'gray';
};
