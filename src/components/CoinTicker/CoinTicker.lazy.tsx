import React, { JSX, lazy, Suspense } from 'react';

const LazyCoinTicker = lazy(() => import('./CoinTicker'));

const CoinTicker = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCoinTicker {...props} />
  </Suspense>
);

export default CoinTicker;
