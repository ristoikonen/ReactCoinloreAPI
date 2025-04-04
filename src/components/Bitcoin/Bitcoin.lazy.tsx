import React, { JSX, lazy, Suspense } from 'react';

const LazyBitcoin = lazy(() => import('./Bitcoin'));

const Bitcoin = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBitcoin id='90' {...props} />
  </Suspense>
);

export default Bitcoin;
