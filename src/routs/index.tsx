import { createBrowserRouter } from 'react-router-dom';
import { NAVIGATION } from './constants';
import { SignInLazyView } from './lazyViews/SignInLazyView';
import { StoreController } from '../mobx/controllers/StoreController';
import { LandingLazyView } from './lazyViews/LandingLazyView';
import { SignUpLazyView } from './lazyViews/SignUpLazyView';

const PageNotFound = () => {
  return <div>404</div>;
};

export const routers = (store: StoreController) =>
  createBrowserRouter([
    {
      path: '/',
      element: <LandingLazyView />,
    },
    {
      path: NAVIGATION.signUp,
      element: <SignUpLazyView />,
    },
    {
      path: NAVIGATION.signIn,
      element: <SignInLazyView />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);