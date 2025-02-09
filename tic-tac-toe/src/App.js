import {useEffect, useState} from 'react';
import styles from './App.module.css';
import { initialArray, winningCombos } from './constant';


function App() {
  const [squares, setSquares] = useState(initialArray);
  const [winner, setWinner] = useState(null);
  const [isXNext, setIsXNext] = useState(false);
  const [[xWins, oWins, draws], setPlayersWin] = useState([0, 0, 0]);


  useEffect(() => {
    computeWin();
  }, [squares]);

  useEffect(() => {
    if(winner === "X") {
      setPlayersWin([xWins+1, oWins, draws]);
    }else if(winner === "O") {
      setPlayersWin([xWins, oWins + 1, draws]);
    }else if(winner === null && squares.filter(square => square === null).length === 0) {
      setPlayersWin([xWins, oWins, draws + 1]);
    }
  }, [winner, squares]);


  const computeWin = () => {
    console.log("initial render");
    setIsXNext(!isXNext);
    for(const combo of winningCombos) {
      const [a, b, c] = combo;
      if(squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a] === 1 ? "X" : "O");
        return
      }
    }
  }

  const onEntry = (ith) => {
    if(squares[ith] === null && winner === null) {
      setSquares((preSquares) => {
        const _preSquares = [...preSquares]
        _preSquares[ith] = isXNext ? 1 : 0;
        return _preSquares;
      })
    }

  }

  const rematch = () => {
    setSquares(initialArray);
    setWinner(null);
  }

  return (
    <div className={styles['container']}>
      <div>
          <div>
            Status: {winner ? `${winner} winner`: "Playing"}
            <div className={styles['container']}>
              <div className={styles['mx-5']}>
                <div>X</div>
                <div>{xWins} wins</div>
              </div>
              <div className={styles['mx-5']}>
                <div>O</div>
                <div>{oWins} wins</div>
              </div>
              <div>
                <div>=</div>
                <div>{draws} draws</div> 
              </div>
            </div>
          </div>
          <div className={styles['grid-container']}>
            {squares.map((square, i) => {
              return <Square key={i} ith={i} value={square} onEntry={onEntry}/>
            })}
          </div>
        <button onClick={rematch}>Rematch</button>
      </div>
    </div>
  );
}


const Square = ({ith, onEntry, value}) => {

    return (
      <div className={styles['grid-item']} onClick={() => onEntry(ith)}>
        <div style={{ opacity: value !== null ? 1 : 0, transition: 'all .1s ease-in-out' }}>{value !== null ? (value === 1 ? "X" : "O") : "X"}</div>
      </div>
    )
}

export default App;
