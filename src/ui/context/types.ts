export type ThemeType = 'default' | 'moms-kitchen';

export type ThemeKeyType =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'text'
  | 'error';

export type ColorsType = {
  [key in
    | 'origin'
    | '20'
    | '30'
    | '40'
    | '50'
    | '60'
    | '70'
    | '80'
    | '90']: string;
};

export type ThemeContextType = Map<ThemeKeyType, ColorsType>;

export interface ITheme {
  value: ThemeType;
  label: string;
  colors: ThemeContextType;
  fonts: {
    body: string;
  };
}
