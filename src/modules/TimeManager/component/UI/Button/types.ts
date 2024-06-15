export type ButtonPropsType = {
  onClick: () => void;
  children: JSX.Element | JSX.Element[] | string;
  isHidden?: boolean;
  isDisable?: boolean;
  mix?: string;
};
