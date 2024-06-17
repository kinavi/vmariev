import { ActionFunction, redirect } from 'react-router-dom';
import { Store } from './mobx/Store';
import { token } from '../../api/Token';
import { NAVIGATION } from '../../routs/constants';
import { apiServise } from '../../api';

export const timeManagerLazyViewAction: ActionFunction = async (data) => {
  if (token.userData) {
    const store = new Store(apiServise);
    store.onInitial();
    return store;
  }
  return redirect(NAVIGATION.signIn);
};
