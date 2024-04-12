import Color from 'colorjs.io';

export const createColorPalette = (baseColor: string) => {
  const PRIMARY_COLOR = new Color(baseColor).toString();
  const primaryColorHover = new Color(PRIMARY_COLOR);

  primaryColorHover.hsl.l = 90;
  const PRIMARY_COLOR_90 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 80;
  const PRIMARY_COLOR_80 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 70;
  const PRIMARY_COLOR_70 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 60;
  const PRIMARY_COLOR_60 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 50;
  const PRIMARY_COLOR_50 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 40;
  const PRIMARY_COLOR_40 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 30;
  const PRIMARY_COLOR_30 = primaryColorHover.toString();
  primaryColorHover.hsl.l = 20;
  const PRIMARY_COLOR_20 = primaryColorHover.toString();

  return {
    origin: PRIMARY_COLOR,
    20: PRIMARY_COLOR_20,
    30: PRIMARY_COLOR_30,
    40: PRIMARY_COLOR_40,
    50: PRIMARY_COLOR_50,
    60: PRIMARY_COLOR_60,
    70: PRIMARY_COLOR_70,
    80: PRIMARY_COLOR_80,
    90: PRIMARY_COLOR_90,
  };
};
