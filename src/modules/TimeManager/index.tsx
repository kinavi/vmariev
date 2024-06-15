import { Suspense, lazy } from 'react';
import { Loader } from '../../ui/components/Loader';
import { useLoaderData } from 'react-router-dom';
import { Store } from './mobx/Store';
import './style/index.sass';
import { StateContext } from './mobx';
import { NavigationBar } from '../../components/NavigationBar';

const TimeManagerApp = lazy(() => import('./container/App'));

export const TimeManagerLazyView = () => {
  const store = useLoaderData();
  if (store instanceof Store) {
    return (
      <NavigationBar>
        <Suspense fallback={<Loader />}>
          <StateContext.Provider value={store}>
            <TimeManagerApp />
          </StateContext.Provider>
        </Suspense>
      </NavigationBar>
    );
  }
  return null;
};
