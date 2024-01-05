import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  //increment
  function increment() {
    setCount(count + 1);
  }

  //decrement
  function decrement() {
    setCount(count - 1);
  }

  //countColorClass
  const countColorClass = count > 0 ? 'blue-text' : count < 0 ? 'red-text' : '';

  return (
    <div>
      <h1 className={countColorClass}>{count}</h1>
      <button className="btnDecrement" onClick={decrement}>-</button>
      <button className="btnIncrement" onClick={increment}>+</button>
    </div>
  );
}

export default App;
