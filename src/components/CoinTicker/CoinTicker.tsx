import React, { FC } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { bitcoinPrice, isBitcoinUp, coinSymbol } from '../Bitcoin/Bitcoin';
import { CoinTickerWrapper, InnerWrapper, CoinTickerText, CoinUpSymbol,AdvancedImageWrapper } from './CoinTicker.styled';

// get currency symbol icon from my Cloudinary storage, icons need to be named as Cloudfare API's currency symbol name.
let cld = new Cloudinary({ cloud: { cloudName: process.env.REACT_APP_CLOUD_NAME } });

// CoinTicker component that displays a ticker with the coin price and an arrow indicating if the price is up or down
// The component takes in two props: text (the price) and isCoinUp (a boolean indicating if the price is up or down)
const CoinTicker: FC  = () => {

   const img = cld
   .image(!coinSymbol ? 'BTC' : coinSymbol) // Use the coin symbol from Bitcoin or default to BTC
   .format('auto') 
   .quality('auto')
   .resize(auto().gravity(autoGravity()).width(36).height(36)); 

   return(
      <CoinTickerWrapper data-testid="CoinTicker">
            <InnerWrapper>
               <AdvancedImageWrapper><AdvancedImage cldImg={img}/></AdvancedImageWrapper><CoinTickerText>{coinSymbol}</CoinTickerText> (<CoinUpSymbol>{isBitcoinUp ? '\u25B2' : '\u25BC'}</CoinUpSymbol>) <br/> {bitcoinPrice ?? "0"} USD
            </InnerWrapper>
      </CoinTickerWrapper>
   );
};

export default CoinTicker;
