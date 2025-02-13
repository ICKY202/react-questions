import {useState} from "react";
import './App.css';
import usePasswordGenerator from "./use_password_generator";
import PasswordStrength from "./PasswordStrength";


function App() {
  const [checkboxes, setCheckboxes] = useState([{title: "Include Uppercase Letters", state: false}, {title: "Include Lowercase Letters", state: false},{title: "Include Numbers", state: false},{title: "Include Symbols", state: false}]);
  const [characterLength, setCharacterLength] = useState(4);
  const [copied, setCopied] = useState(false)

  const {password, generatePassword, errorMessage, setErrorMessage} = usePasswordGenerator();

  const handleCheckboxes = (index) => {
    const updatedBoxes = [...checkboxes];
    updatedBoxes[index].state = !updatedBoxes[index].state;
    setCheckboxes(updatedBoxes);
    setErrorMessage("");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(!copied)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="App">
      <div className="container">
        {password && 
        <div className='header'>
          <span>{password}</span>
          <button style={{textTransform: "uppercase"}}onClick={handleCopy}>{copied ? "copied" : "Copy"}</button>
        </div>}
        <div className='character_length'>
          <span>Character Length</span>
          <span>{characterLength}</span>
        </div>
        <input type="range" value={characterLength} min={4} max={20} onChange={(e) => setCharacterLength(e.target.value)}/>
        <div className="checkbox_container">
          {checkboxes.map((checkbox, index) => {
            return <div key={index}>
              <input type="checkbox" onChange={() => handleCheckboxes(index)} checked={checkbox.state}></input><label>{checkbox.title}</label>
            </div>
          })}
        </div>
        <PasswordStrength passwordLength={characterLength}></PasswordStrength>
          {errorMessage && <div style={{color: "red"}}>{errorMessage}</div>}
        <button className="generate_btn" onClick={() => generatePassword(checkboxes, characterLength)}>Generate Password</button>
        
      </div>
    </div>
  );
}

export default App;
