import { Tab } from './chunks/Tab';
import { DefaultItem } from './chunks/DefaultItem';
import { RadioBlockItem } from './chunks/RadioIcon';
import { WithFocus } from './hocs/WithFocus';
import { withGroupRadio } from './hocs/withGroupRadio';
import { ClassicButton } from './chunks/ClassicButton';

const RadioDefault = withGroupRadio(WithFocus(DefaultItem));

const RadioBlock = withGroupRadio(WithFocus(RadioBlockItem));

const RadioTab = withGroupRadio(WithFocus(Tab));

const RadioClassicButton = withGroupRadio(WithFocus(ClassicButton));

export { RadioDefault, RadioBlock, RadioTab, RadioClassicButton };
