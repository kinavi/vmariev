import React from 'react';
import { lazy, Suspense } from 'react';
import { Loader } from '../../../ui/components/Loader';

const SignIn = lazy(() => import('../../../pages/SignIn'));

export const SignInLazyView = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SignIn />
    </Suspense>
  );
};
