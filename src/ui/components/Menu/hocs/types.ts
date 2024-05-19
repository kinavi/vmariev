import { DefaultMenuPropsType } from '../chunks/DefaultMenu/types';

export type WithPatternMenuType = (Components: {
  Default: (props: DefaultMenuPropsType) => JSX.Element;
}) => (props: DefaultMenuPropsType) => JSX.Element;
