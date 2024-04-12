import DATA from '../../INITIAL_DATA.json';

export const FILTERS = DATA.tools.reduce<string[]>((acc, item) => {
  if (!acc.includes(item.type)) {
    return [...acc, item.type];
  }
  return acc;
}, []);
