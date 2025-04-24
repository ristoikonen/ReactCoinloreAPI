# ReactCoinloreAPI app

Simple page shows Coinlore API's currency prices. Uses 'Bitcoin' -component.



## Bitcoin Component

Displays seleced currencys value in USD. Currency selection is by id -attribue.

## Usage

```jsx
import Bitcoin from './components/Bitcoin/Bitcoin';
```

```jsx
<Bitcoin id='90'/>
```

## CoinTicker Component
Is a subcomponent of 'Bitcoin' -component, displays ticker tape animation of selected currency.
Input data is from Bitcoin -comonent.
## Usage
Add CoinTicker -component to 'Bitcoin' -component 

```jsx
// Add import
import CoinTicker from '../CoinTicker/CoinTicker';
...
// Add tag
<CoinTicker />
```

CoinTicker output:

```jsx
BTC (▼)
$93,396.43 USD
```

## Props



|  prop  |    is    |         description         |                                  example                                  |
| :----: | :------: | :-------------------------: | :-----------------------------------------------------------------------: |
|  id   | string, required |   Id of Coinlore Ticker    | id='90' 


 > Data is fetched from Coinlore API: https://api.coinlore.net/api/ticker/?id=90


## Source Code - Bitcoin.tsx
### Async Fetch of Coinlore API's JSON data, target defined by interface 'ICoin'

```jsx
 const Bitcoin: FC<BitcoinProps> = (bprops) => {
   const [data, setData] = useState<ICoin[] | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);
 
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(coinLoreAPIBaseUri + coinLoreAPITickerUri + 
            (!bprops.id ? DEFAULT_ID_BTC : bprops.id));
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

```


### Return style wrapped data, price formatted as US-currency.

```jsx
return (
      <BitcoinWrapper>
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