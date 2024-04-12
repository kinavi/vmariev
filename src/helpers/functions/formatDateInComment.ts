import format from 'date-fns/format';
import { ru } from 'date-fns/locale';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import { formatNumeralsText } from '.';

export const formatDateInComment = (
  date: string,
  tryTranslate: (value: string) => string
) => {
  const deltaDay = differenceInCalendarDays(new Date(), new Date(date));
  switch (true) {
    case deltaDay === 0: {
      const time = differenceInMinutes(new Date(), new Date(date));
      return `${time || '1'} ${formatNumeralsText(time || 1, {
        '1': tryTranslate('минуту'),
        '2': tryTranslate('минуты'),
        '5': tryTranslate('минут'),
      })} ${tryTranslate('назад')}`;
    }
    case deltaDay === 1: {
      const time = format(new Date(date), 'HH:mm', { locale: ru });
      return `${tryTranslate('Вчера в')} ${time}`;
    }
    default: {
      return format(new Date(date), 'dd.MM.yyyy, HH:mm', {
        locale: ru,
      });
    }
  }
};
