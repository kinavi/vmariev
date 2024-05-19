import React from 'react';
import { lazy, Suspense } from 'react';
import { Loader } from '../../../ui/components/Loader';

const Landing = lazy(() => import('../../../pages/Landing'));

export const LandingLazyView = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Landing />
    </Suspense>
  );
};
