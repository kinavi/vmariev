import { ActionFunction } from 'react-router-dom';
import { Store } from './mobx/Store';
import { apiServise } from '../../api';

export const timeManagerLazyViewAction: ActionFunction = async (data) => {
  // const hasToken = await checkToken(core);
  // if (hasToken) {
  const store = new Store(apiServise);
  store.onInitial();
  return store;
  // }
  // return redirect(NAVIGATION.signIn);
};
