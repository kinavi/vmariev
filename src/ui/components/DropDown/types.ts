import { ButtonPatternType, ButtonPropsType } from '../Button/types';

export type DropDownPropsType = {
  content: (onClose: () => void) => JSX.Element | string;
  className?: string;
  pattern?: ButtonPatternType;
  size?: ButtonPropsType['size'];
  isHiddenIndicator?: boolean;
  isDisable?: boolean;
  direction?: 'left' | 'right' | 'left-up' | 'right-up';
  minWidth?: number;
  children: JSX.Element | number | string;
  isLoading?: boolean;
  isHoverShow?: boolean;
  isReadonly?: boolean;
  onOpen?(): void;
  onClose?(): void;
};
