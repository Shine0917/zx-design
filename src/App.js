import React from 'react';
import Button from './components/Button/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button btnType="primary" size="large">test</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
