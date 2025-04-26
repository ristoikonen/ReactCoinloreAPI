# ReactCoinloreAPI app

Page shows selected currency price and movement, data from Coinlore API. Consists of my 'Bitcoin' and CoinTicker -components.

**See CoinTicker -component online here:**
> ### https://vite-react-pearl-sigma-30.vercel.app/

Price refreshed every 30 seconds.
Page has Vercel's analytics component. 

## Bitcoin Component

Displays seleced currencys value in USD. Currency selection is by id -attribue.

 > Note: Data is fetched from Coinlore API: https://api.coinlore.net/api/ticker/?id=90

## Usage

```jsx
import Bitcoin from './components/Bitcoin/Bitcoin';
```

To get Bitcoin
```jsx
<Bitcoin id='90' textwidth='480px'/>
```

To get Ethereum
```jsx
<Bitcoin id='80' textwidth='480px'/>
```

## Props


|  prop  |    is    |         description         |                                  example                                  |
| :----: | :------: | :-------------------------: | :-----------------------------------------------------------------------: |
|  id   | string, required |   Id of Coinlore Ticker API currency    | id='90' 
|  textwidth   | string, default 480px |   Width of Bitcoin component    | textwidth='500px' 



## CoinTicker Component
I wrote it as a subcomponent of 'Bitcoin' -component. It displays ticker tape animation of selected currency.
Input data is from Bitcoin -component. Bitcoin's 'textwidth' -property sets width of the scroll area.
Main currencies display symbol icon from my Cloudinary storage.



## Usage
Add CoinTicker -component to 'Bitcoin' -component . 
> Note: Remove Bitcoin -component's data mapping section if you want to display ticker only.  

```jsx
// Add import
import CoinTicker from '../CoinTicker/CoinTicker';
...
// Add tag
<CoinTicker />
```

CoinTicker's output:

![CoinTicker](https://res.cloudinary.com/ddjpunfg4/image/upload/v1745632652/ticker.gif)




## Source Code - Bitcoin.tsx
### Async Fetch of Coinlore API's JSON data, target defined by interface 'ICoin'

```jsx
 const Bitcoin: FC<BitcoinProps> = (bprops) => {
   const [data, setData] = useState<ICoin[] | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
 
   const txtwidth = !bprops.textwidth ? DEFAULT_TEXTWIDTH : bprops.textwidth;

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(coinLoreAPIBaseUri + coinLoreAPITickerUri + 
            (!bprops.id ? DEFAULT_ID_BTC : bprops.id));
         if (!response.ok) throw new Error("Response from Coinlore API errror");
         const jsonData = await response.json();
         if (!jsonData) throw new Error("Coinlore API data error");
         //console.log(jsonData);
         const result = jsonData.map((item: ICoin) => ({
           id: item.id,
           name: item.name ?? "",
           symbol: item.symbol ?? "",
           price_usd: item.price_usd ?? "0",
         }));
         setData(result);
       } catch (err) {
         setError((err as Error).message);
       } finally {
         setLoading(false);
       }

```


### Return style wrapped data, price formatted as US-currency.

```jsx
return (
      <BitcoinWrapper textwidth={txtwidth}>
            {data?.map((item) => (
               <p id={item.symbol!}>{item.name!} in USD: {formatUSCurrency(item.price!)}</p>
            ))}
      </BitcoinWrapper>
   );
```


## Useful Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.

 > NOTE: All tests are succesful!