import { IIdContain } from '../types';

export interface INormalizedById<T extends IIdContain> {
    byId: { [id: string | number]: T };
    allIds: (string|number)[];
}

export const normalizationById = <T extends IIdContain> (
  array: T[],
): INormalizedById<T> => array.reduce<INormalizedById<T>>(
  (acc, item) => ({
    byId: { ...acc.byId, [item.id]: item },
    allIds: [...acc.allIds, item.id],
  }),
  {
    byId: {},
    allIds: [],
  },
);