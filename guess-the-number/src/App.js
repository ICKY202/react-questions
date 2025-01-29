import { useEffect, useState } from "react";

export default function App() {
  const [randomNumber, setRandomNumber] = useState();
  const [less, setLess] = useState(false);
  const [guessVal, setGuessVal] = useState(1);
  const [high, setHigh] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [guessDisabled, setGuessDisabled] = useState(false);
  useEffect(() => {
    setRandomNumber(Math.round(Math.random() * 100));
  }, []);
  const handleGuess = (e) => {
    e.preventDefault();

    if (guessVal < randomNumber) {
      setLess(true);
      setHigh(false);
    } else if (guessVal > randomNumber) {
      setLess(false);
      setHigh(true);
    } else {
      setLess(false);
      setHigh(false);
      setCorrect(true);
      setGuessDisabled(true);
    }
  };
  const handleGuessedValue = (e) => {
    setGuessVal(Number(e.target.value));
  };
  const handleReset = (e) => {
    setGuessVal("");
    setCorrect(false);
    setLess(false);
    setHigh(false);
    setGuessDisabled(false);
  };
  console.log(randomNumber);
  return (
    <div className="App">
      <h3>Guess the Number</h3>
      <form onSubmit={handleGuess}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="guessNo">
            Please guess the number between 0 to 100
          </label>
          <input
            type="number"
            value={guessVal}
            style={{ textAlign: "center" }}
            min={0}
            max={100}
            id="guessNo"
            onChange={(e) => handleGuessedValue(e)}
          />
        </div>
        <button type="submit" disabled={guessDisabled}>
          check
        </button>{" "}
        <button type="reset" onClick={() => handleReset()}>
          Reset
        </button>
      </form>
      <div>
        {less && (
          <p>
            your guessed value is <b>less</b> than the correct
          </p>
        )}
        {high && (
          <p>
            your guessed value is <b>High</b> than the correct
          </p>
        )}
        {correct && (
          <p>
            you won! your guess is <b>right!</b>
          </p>
        )}
      </div>
    </div>
  );
}
