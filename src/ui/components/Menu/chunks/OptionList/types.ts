export type OptionListPropsType = {
  options: {
    content: string | JSX.Element;
    onClick(): void;
    isHidden?: boolean;
  }[];
  onClose: () => void;
};
