import React, { FC } from 'react';
import { bitcoinPrice, isBitcoinUp, coinSymbol } from '../Bitcoin/Bitcoin';
import { CoinTickerWrapper, InnerWrapper, CoinTickerText, CoinUpSymbol } from './CoinTicker.styled';


// CoinTicker component that displays a ticker with the coin price and an arrow indicating if the price is up or down
// The component takes in two props: text (the price) and isCoinUp (a boolean indicating if the price is up or down)
const CoinTicker: FC  = () => {

   return(
      <CoinTickerWrapper data-testid="CoinTicker">
            <InnerWrapper>
            <CoinTickerText>{coinSymbol}</CoinTickerText> (<CoinUpSymbol>{isBitcoinUp ? '\u25B2' : '\u25BC'}</CoinUpSymbol>) <br/> {bitcoinPrice ?? "0"} USD
            </InnerWrapper>
      </CoinTickerWrapper>
   );
};

export default CoinTicker;
