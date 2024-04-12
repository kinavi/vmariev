import { ITheme } from '../../context/types';
import { createColorTheme } from '../../helpers/createColorTheme';

export const DEFAULT_BUTTON: ITheme = {
  colors: createColorTheme('default'),
  fonts: {
    body: '',
  },
  label: 'default',
  value: 'default',
};
