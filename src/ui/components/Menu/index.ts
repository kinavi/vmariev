import { withPatternMenu } from './hocs/withPatternMenu';
import { DefaultMenu } from './chunks/DefaultMenu';

export const Menu = withPatternMenu({
  Default: DefaultMenu,
});
