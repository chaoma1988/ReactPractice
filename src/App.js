import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  console.log("compoennt rendered.");
  const handleOnClick = () => {
    setCount(count + 1);
  }
 
  const resetCount = () => {
    setCount(0);
  }

  return (
    <div>
    <button className="App" onClick={handleOnClick}>
      {`You clicked ${count}`} times. 
    </button>
    <button onClick={resetCount}>
      Reset Count.
    </button>
    </div>
  );
}

export default App;
