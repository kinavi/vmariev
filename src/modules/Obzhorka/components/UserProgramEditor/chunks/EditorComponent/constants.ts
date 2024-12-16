import { ActivityType, GoalType, SexType } from './types';

export const SEX_OPTIONS = [
  {
    value: SexType.MALE,
    label: 'Мужской',
  },
  {
    value: SexType.FEMALE,
    label: 'Женский',
  },
];

export const PHYSICAL_ACTIVITY = [
  {
    value: ActivityType.LOW,
    label: 'Отсутсвие активности',
  },
  {
    value: ActivityType.LIGHT,
    label: 'от 20 мин 1-3 раза в неделю',
  },
  {
    value: ActivityType.MIDDLE,
    label: 'от 30-60 мин 3-4 раза в неделю',
  },
  {
    value: ActivityType.HIGH,
    label: 'от 30-60 мин 5-7 раза в неделю',
  },
  {
    value: ActivityType.EXTREME,
    label: 'от 1 тренировок в день 6-7 раз в неделю',
  },
];

export const GOAL_OPTIONS = [
  {
    value: GoalType.MASS_GAIN,
    label: 'Набор мышечной массы',
  },
  {
    value: GoalType.NORMAL,
    label: 'Поддержка веса',
  },
  {
    value: GoalType.WEIGHT_LOSS,
    label: 'Сброс веса',
  },
];
