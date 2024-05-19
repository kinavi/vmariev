import { lazy, Suspense } from 'react';
import { Loader } from '../../../ui/components/Loader';

const SignUp = lazy(() => import('../../../pages/SignUp'));

export const SignUpLazyView = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SignUp />
    </Suspense>
  );
};
