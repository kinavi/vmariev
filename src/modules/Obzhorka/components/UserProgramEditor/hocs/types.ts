export type WithToggleModeType = <
  EditorComponentPropsType extends { mode: 'editor' },
  ViewComponentPropsType extends { mode: 'view' }
>(Components: {
  Editor: (props: EditorComponentPropsType) => React.JSX.Element;
  View: (props: ViewComponentPropsType) => React.JSX.Element;
}) => (
  props: EditorComponentPropsType | ViewComponentPropsType
) => React.JSX.Element;
