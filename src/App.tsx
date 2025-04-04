import React from 'react';
import './App.css';
import Bitcoin from './components/Bitcoin/Bitcoin';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <code><Bitcoin id='90'/></code>
          <br />
          <div className='App-link'>
            <code>Data from api.coinlore.net</code>
          </div>
      </header>
    </div>
  );
}

export default App;
