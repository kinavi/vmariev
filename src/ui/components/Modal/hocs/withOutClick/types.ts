export type WithOutClickType = <PropsType>(
  Component: (props: PropsType) => JSX.Element
) => (
  props: { onClose?(): void; isDisable?: boolean } & PropsType
) => JSX.Element;
