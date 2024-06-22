export type WithOverlayType = <PropsType>(
  Component: (props: PropsType) => JSX.Element
) => (props: { hiddenOverlay?: boolean } & PropsType) => JSX.Element;
