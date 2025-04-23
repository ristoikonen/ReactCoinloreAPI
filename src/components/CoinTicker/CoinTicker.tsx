import React, { FC } from 'react';
import { CoinTickerWrapper } from './CoinTicker.styled';

interface CoinTickerProps {
   text: string;
   isCoinUp: boolean;
}

// CoinTicker component that displays a ticker with the coin price and an arrow indicating if the price is up or down
// The component takes in two props: text (the price) and isCoinUp (a boolean indicating if the price is up or down)
const CoinTicker: FC<CoinTickerProps> = (cprops) => (
   
<CoinTickerWrapper data-testid="CoinTicker">

    <div style={{ marginLeft: '20px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
      <div style={{ display: 'inline-block', animation: 'ticker 10s linear infinite' }}>
        <b>BTC</b> ({cprops.isCoinUp ? '\u25B2' : '\u25BC'}) <br/> {cprops.text ?? "0"} USD
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>

 </CoinTickerWrapper>
 
);

export default CoinTicker;
