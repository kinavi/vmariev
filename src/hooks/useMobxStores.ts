import { Context, useContext } from 'react';

export const useMobxStores = <T>(StateContext: Context<T>) => {
  const context = useContext(StateContext);
  if (context === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return context;
};
