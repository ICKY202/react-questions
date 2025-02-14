import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  const [value, setValue] = useState(0)
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((value) => value + 0.1);
    }, 20)
  },[])
  return (
    <div className="App">
      <span>Progress Bar</span>
      <ProgressBar progress={value} onComplete={() => {setSuccess(true)}}/>
      <span>{success ? "Success" : "Loading...."}</span>
    </div>
  );
}

export default App;
