import React from 'react';
import Button, {ButtonSize, ButtonType } from './components/Button/button'
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>disabled</Button>
        <Button btnType="primary" size={ButtonSize.Large}>Large</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small</Button>
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
