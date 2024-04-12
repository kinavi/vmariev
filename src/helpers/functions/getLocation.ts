import { getSubCore } from './getSubCore';

export const getLocation = () => {
  const { origin } = window.location;
  const subCore = getSubCore();
  return subCore ? `${origin}/${subCore}` : origin;
};
