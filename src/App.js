import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  console.log("compoennt rendered.");
  const handleOnClick = () => {
    setCount(count + 1);
  }
 
  return (
    <div className="App" onClick={handleOnClick}>
      {`You clicked ${count}`} times. 
    </div>
  );
}

export default App;
