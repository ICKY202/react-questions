import {useState, useMemo} from 'react'
import './App.css';
import useCustomMemo from './use_cutsom_memo';

function App() {
  const [counter, setCounter] = useState(0);
  const  [counter2, setCounter2] = useState(100);
  const squaring = () => {
    console.log("expansive calculation!");
    return counter * counter;
  }

  const squaredValue = useCustomMemo(squaring, [counter]);

  return (
    <div className="App">
    <h1>Counter: {counter}</h1>
    <h2>Squared: {squaredValue}</h2>
    <button onClick={() => setCounter(counter + 1)}>Increment</button>    
    <h1>Counter: {counter2}</h1>
    <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>    
    </div>
  );
}

export default App;
