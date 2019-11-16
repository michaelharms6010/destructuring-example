import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  let [count, setCount] = useState(0);
  
  const plusOne = _ => setCount(count+1);
  
  return (
    <div className="App">
      <Card 
        title="Hello"
        description="I'm an example of destructuring props" 
        count={count}
      />
      <button onClick={plusOne}>ADDBOYS</button>
    </div>
  );
}

export default App;
