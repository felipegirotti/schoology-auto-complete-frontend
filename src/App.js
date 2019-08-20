import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './component/AutoComplete';

function App() {
  
  return (
    
    <div className="App">
      <header className="App-header">
        Find the Cities in the USA
        <AutoComplete></AutoComplete>        
      </header>
    </div>
  );
}

export default App;
