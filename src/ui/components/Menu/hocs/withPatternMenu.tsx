import { WithPatternMenuType } from './types';

export const withPatternMenu: WithPatternMenuType = (Components) => (props) => {
  // const { pattern } = props;
  return <Components.Default {...props} />;
};
