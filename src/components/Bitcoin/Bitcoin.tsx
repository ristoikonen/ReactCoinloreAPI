import React, { FC, useState, useEffect } from 'react';

import { BitcoinWrapper } from './Bitcoin.styled';
import CoinTicker from '../CoinTicker/CoinTicker';

const DEFAULT_ID_BTC = "90"; // fetch Bitcoin by default
const coinLoreAPIBaseUri = "https://api.coinlore.net/api/";
const coinLoreAPITickerUri = "ticker/?id=";
//const top10 = "https://api.coinlore.com/api/tickers/?start=0&limit=10";


let DEFAULT_TEXTWIDTH = "480px"; // default value for textwidth
let bitcoinPrice = "0"; // default value for price
let isBitcoinUp = true; // default value for up/down
let coinSymbol = "BTC"; // default value for symbol


interface BitcoinProps { 
  id?: string;
  textwidth?: string;
}

interface ICoin {
   id: number ;
   name?: string;
   symbol?: string;
   price_usd?: string;
   percent_change_1h?: string;
   percent_change_24h?: string;
 }


// return price in US currency format as Coinlore's prices are in USD
 const formatUSCurrency = (amount: string): string => {
   const numericAmount = parseFloat(amount);
   if (isNaN(numericAmount)) throw new Error("Invalid currency amount string conversion"); 
   return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(numericAmount);
 };

 // async fetch of JSON mapped to interface 
 const Bitcoin: FC<BitcoinProps> = (bprops) => {
   const [data, setData] = useState<ICoin[] | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   const txtwidth = !bprops.textwidth ? DEFAULT_TEXTWIDTH : bprops.textwidth;

   useEffect(() => {
     const fetchData = async () => {
       try {
        // let coinDataPrice: ICoin[] = []; // default value for price const response = await fetch(top10); jsonData.data.map let coinDataPrice: ICoin[] = []; // default value for price
         const response = await fetch(coinLoreAPIBaseUri + coinLoreAPITickerUri + (!bprops.id ? DEFAULT_ID_BTC : bprops.id));
         if (!response.ok) throw new Error("Response from Coinlore API errror");
         const jsonData = await response.json();
         if (!jsonData) throw new Error("Coinlore API data error");
         console.log(jsonData);
          // map the JSON data to the ICoin interface
         const result = jsonData.map((item: ICoin) => ({
            id: item.id,
            name: item.name ?? "", 
            symbol: item.symbol ?? "",
            price_usd: item.price_usd ?? "0",
            percent_change_1h: item.percent_change_1h ?? "0",
            percent_change_24h: item.percent_change_24h ?? "0",
         }));
         
         setData(result);
       } catch (err) {
         setError((err as Error).message);
       } finally {
         setLoading(false);
       }
     };
 
     fetchData();

   }, []); 
 
   if (loading) return <p>Loading price...</p>;
   if (error) return <p>Error: {error}</p>;

   bitcoinPrice = formatUSCurrency(data?.[0].price_usd ?? "0");
   isBitcoinUp = parseFloat(data?.[0].percent_change_1h ?? "0") > 0;
   coinSymbol = data?.[0].symbol ?? "BTC";

   //const priceChange = isBitcoinUp ? "&#x25B2;" : "&#x25BC;";
   //const priceChangeColor = isBitcoinUp ? "green" : "red";

   return (
      <BitcoinWrapper textwidth={txtwidth}>
        
        {data?.map((item, index) => (
               <p key={index}  id={item.symbol!}>{item.name!} {formatUSCurrency(item.price_usd!)} USD</p>
          ))}

         <CoinTicker />
      </BitcoinWrapper>

   );
};

export default Bitcoin;
export { bitcoinPrice, isBitcoinUp, coinSymbol };

