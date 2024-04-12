import { ThemeKeyType } from './types';

export const DEFAOULT_THEME: { [key in ThemeKeyType]: string } = {
  primary: '#c49d6e',
  secondary: '#8EC46E',
  background: '#1C2727',
  text: '#34353A',
  error: '#F24304',
};

export const MOMS_KITCHEN_THEME: { [key in ThemeKeyType]: string } = {
  primary: '#E6A787',
  secondary: '#09B9F1',
  background: '#34353A',
  text: '#34353A',
  error: '#F24304',
};

export const THEME_LIST = {
  default: DEFAOULT_THEME,
  'moms-kitchen': MOMS_KITCHEN_THEME,
};
