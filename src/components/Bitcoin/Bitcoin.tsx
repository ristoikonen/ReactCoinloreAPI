import React, { FC, useState, useEffect } from 'react';
import { BitcoinWrapper } from './Bitcoin.styled';

const DEFAULT_ID_BTC = "90"; // fetch Bitcoin by default
const coinLoreAPIBaseUri = "https://api.coinlore.net/api/";
const coinLoreAPITickerUri = "ticker/?id=";

interface BitcoinProps { id?: string;}

interface ICoin {
   id: number ;
   name?: string;
   symbol?: string;
   price?: string;
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
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(coinLoreAPIBaseUri + coinLoreAPITickerUri + (!bprops.id ? DEFAULT_ID_BTC : bprops.id));
         if (!response.ok) throw new Error("Response from Coinlore API errror");
         const jsonData = await response.json();
         if (!jsonData) throw new Error("Coinlore API data error");
         //console.log(jsonData);
         const result = jsonData.map((item: any) => ({
           id: item.id,
           name: item.name ?? "",
           symbol: item.symbol ?? "",
           price: item.price_usd ?? "0",
         }));
         setData(result);
       } catch (err) {
         setError((err as Error).message);
       } finally {
         setLoading(false);
       }
     };
 
     fetchData();
   }, [bprops]); // Runs only once on mount
 
   if (loading) return <p>Loading price...</p>;
   if (error) return <p>Error: {error}</p>;

   return (
      <BitcoinWrapper>
         <div>
            {data?.map((item) => (
               <p id={item.symbol!}>{item.name!} in USD: {formatUSCurrency(item.price!)}</p>
            ))}
         </div>
      </BitcoinWrapper>
   );
};



export default Bitcoin;

