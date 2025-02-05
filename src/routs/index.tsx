import { createBrowserRouter } from 'react-router-dom';
import { NAVIGATION } from './constants';
import { SignInLazyView } from './lazyViews/SignInLazyView';
import { StoreController } from '../mobx/controllers/StoreController';
import { LandingLazyView } from './lazyViews/LandingLazyView';
import { SignUpLazyView } from './lazyViews/SignUpLazyView';
import { TimeManagerLazyView } from '../modules/TimeManager';
import { timeManagerLazyViewAction } from '../modules/TimeManager/routAction';
import { Obzhorka } from '../modules/Obzhorka';
import { Olesia } from '../modules/Olesia';

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
      path: NAVIGATION.time,
      element: <TimeManagerLazyView />,
      loader: timeManagerLazyViewAction,
    },
    {
      path: NAVIGATION.obzhorka + '/*',
      element: <Obzhorka />,
      // loader: timeManagerLazyViewAction,
    },
    {
      path: NAVIGATION.olesia,
      element: <Olesia />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);
