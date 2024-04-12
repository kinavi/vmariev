import { formatNumeralsText } from '../formatNumeralsText';

const LABELS = {
  1: 'Публикация',
  2: 'Публикации',
  5: 'Публикаций',
};

const DATA = [
  {
    count: 1,
    to: LABELS[1],
  },
  {
    count: 100,
    to: LABELS[5],
  },
  {
    count: 4,
    to: LABELS[2],
  },
  {
    count: 5,
    to: LABELS[5],
  },
  {
    count: 9,
    to: LABELS[5],
  },
  {
    count: 0,
    to: LABELS[5],
  },
  {
    count: -1,
    to: LABELS[1],
  },
  {
    count: 99999,
    to: LABELS[5],
  },
  {
    count: 21,
    to: LABELS[1],
  },
  {
    count: 23,
    to: LABELS[2],
  },
];

DATA.map((item) => {
  test(`formatNumeralsText: count - ${item.count}, to - ${item.to}`, () => {
    const result = formatNumeralsText(item.count, LABELS);
    expect(result).toBe(item.to);
  });
});
