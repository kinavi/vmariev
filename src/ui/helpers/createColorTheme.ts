import { getObjectKeys } from '../../helpers/functions';
import { THEME_LIST } from '../context/constants';
import { ColorsType, ThemeKeyType, ThemeType } from '../context/types';
import { createColorPalette } from '../style/createColorPalette';

export const createColorTheme = (
  theme: ThemeType
): Map<ThemeKeyType, ColorsType> => {
  const colorMap = THEME_LIST[theme];
  const themeKeys = getObjectKeys(colorMap);
  const result = new Map<ThemeKeyType, ColorsType>();
  themeKeys.map((key) => {
    result.set(key, createColorPalette(colorMap[key]));
  });
  return result;
};
