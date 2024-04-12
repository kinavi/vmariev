export type TooltipPositionType = 'up' | 'right';

export type TooltipPropsType = {
  content: string | JSX.Element | null;
  position?: TooltipPositionType;
  className?: string;
  innerRef?: any;
  children: JSX.Element | JSX.Element[] | string;
  isDisable?: boolean;
};

export type CoordsType = {
  left: number;
  height: number;
  top: number;
  width: number;
};

export type SizeType = {
  width: number;
  height: number;
};
