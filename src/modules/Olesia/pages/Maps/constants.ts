import { GiftType } from './types';
import gift2 from '../../assets/gift_2.png';
import bee from '../../assets/bee.png';
import leo from '../../assets/leo.png';
import tradishions from '../../assets/tradishions.png';
import teatr from '../../assets/teatr.png';
import qqq from '../../assets/qqq.png';

export const GIFT: GiftType[] = [
  {
    position: [56.833343, 60.616195],
    title: 'Пчелиный подарок',
    availabilityDate: new Date(2024, 9, 19, 16).toISOString(),
    isReceived: false,
    content: {
      img: bee,
      text: 'Скажите громко! "Я хочу пчелиный подарок!"',
    },
  },
  {
    position: [56.833343, 60.616195],
    title: 'Львиный подарок',
    availabilityDate: new Date(2024, 9, 19, 20, 18).toISOString(),
    isReceived: false,
    content: {
      img: leo,
      text: 'Прорычи как тигрица и скажи громко "Я хочу львиный подарок!"',
    },
  },
  {
    position: [55.798606, 49.111157],
    title: 'Традиционный подарок',
    availabilityDate: new Date(2024, 9, 29).toISOString(),
    isReceived: false,
    content: {
      img: tradishions,
      text: 'Надеюсь сегодня вечером вы свободны. Скажите своему мужу кодовую фразу "Хочу щепотку традиций"',
    },
  },
  {
    position: [41.695783, 44.806673],
    title: 'Деревянный подарок',
    availabilityDate: new Date(2024, 10, 1).toISOString(),
    isReceived: false,
    content: {
      img: teatr,
      text: '“Весь мир — театр, и люди в нём — актеры. И каждый не одну играет роль.” (Уильям Шекспир)',
    },
  },
  {
    position: [41.635347, 41.608042],
    title: 'Алмазный подарок',
    availabilityDate: new Date(2024, 10, 7).toISOString(),
    isReceived: false,
    content: {
      img: qqq,
      text: 'Все что вам нужно, у вас есть. Cкажите мужу "хочу алмазов"',
    },
  },
];
