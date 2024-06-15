export type ItemPropsType = {
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
  children: JSX.Element | JSX.Element[];
};
