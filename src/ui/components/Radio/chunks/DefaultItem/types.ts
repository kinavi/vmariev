import { ThemeableType } from '../../../../types';
import { IContentProperties } from '../../types';

export type DefaultItemPropsType = {
  onClick(): void;
} & ThemeableType &
  IContentProperties;
