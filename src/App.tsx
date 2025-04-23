import React from 'react';
import './App.css';
import Bitcoin, { bitcoinPrice, isBitcoinUp } from './components/Bitcoin/Bitcoin';
import CoinTicker from './components/CoinTicker/CoinTicker';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <code><Bitcoin id='90'/></code>
          <br />
          
          <div className='App-link'>
            <CoinTicker text={bitcoinPrice} isCoinUp ={isBitcoinUp} />
          </div>
          <br />
          
          
      </header>


      <code>Data from api.coinlore.net</code>

    </div>
  );
}

export default App;
