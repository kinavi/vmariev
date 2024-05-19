import { ContainerWrapperPropsType } from './chunks/ContainerWrapper/types';
import { OptionListPropsType } from './chunks/OptionList/types';

export type MenuCommonPropsType = Omit<ContainerWrapperPropsType, 'children'> &
  OptionListPropsType;
