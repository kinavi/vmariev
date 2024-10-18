export type WithTimerType = (
  Components: () => JSX.Element
) => (props: {
  dataOpen: string;
  className?: string;
  label?: string | JSX.Element;
}) => JSX.Element;
