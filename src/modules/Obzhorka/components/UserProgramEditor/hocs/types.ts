export type WithToggleModeType = <
  EditorComponentPropsType,
  ViewComponentPropsType
>(Components: {
  Editor: (props: EditorComponentPropsType) => React.JSX.Element;
  View: (props: ViewComponentPropsType) => React.JSX.Element;
}) => (
  props: (EditorComponentPropsType & ViewComponentPropsType) & {
    mode: 'editor' | 'view';
  }
) => React.JSX.Element;
