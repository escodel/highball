import { useEffect, useState } from "preact/hooks";
import { Ball } from "./ball";

export function Game(props) {
  const { p1name, p2name } = props;
  const [currentPlayer, setCurrentPlayer] = useState(p1name);
  const [p1score, setP1score] = useState(0);
  const [p2score, setP2score] = useState(0);
  const [total, setTotal] = useState(0)
  const [inningsCount, setInningsCount] = useState(0);
  const [innings, setInnings] = useState(null);
  const [deadBalls, setDeadBalls] = useState(0);
  const [p1fouls, setP1fouls] = useState(0);
  const [p2fouls, setP2fouls] = useState(0);
  const [p1timeout, setP1timeout] = useState(false);
  const [p2timeout, setP2timeout] = useState(false);
  const [rack, setRack] = useState([]);
  const [breakStatus, setBreakStatus] = useState(true);
  // const [targetBall, setTargetBall] = useState(1)

  function BallDetails(num, status) {
    return {
      num,
      status,
    };
  }

  function Inning() {
    return {
      "9S": false,
      "BR": false,
      "T": false,
    };
  }

  useEffect(() => {
    let rack = [8, 7, 5, 6, 9, 3, 4, 2, 1];
    rack.forEach((num, i) => {
      let status = num === 1 ? "active" : "neutral";
      rack[i] = new BallDetails(num, status);
    });
    setRack(rack);

    const inning = new Inning();
    inning.count = 1;
    setInnings([inning]);
  }, []);

  useEffect(() => {
    setTotal(p1score + p2score + deadBalls)
  }, [p1score, p2score, deadBalls])

  function increment(n) {
    return n === 9 ? 2 : 1;
  }

  function pocketBall(num) {
    let curr = rack.find((obj) => obj.num === num);
    curr.status = "pocketed";
    setRack((prevState) => {
      let obj = prevState.find((obj) => obj.num === num);
      obj = curr;
      return prevState;
    });

    if (currentPlayer === p1name) {
      setP1score((prevState) => prevState + increment(num));
    } else {
      setP2score((prevState) => prevState + increment(num));
    }
  }

  function markDead(num) {
    let curr = rack.find((obj) => obj.num === num);
    curr.status = "dead";
    setRack((prevState) => {
      let obj = prevState.find((obj) => obj.num === num);
      obj = curr;
      return prevState;
    });
  }

  function scratchFoul() {
    // TODO: fouling out if 3 turns in a row
    if (currentPlayer === p1name) {
      setP1fouls((prevState) => prevState++);
    } else {
      setP2fouls((prevState) => prevState++);
    }
  }

  function callTimeout() {
    if (currentPlayer === p1name) {
      setP1timeout(true);
    } else {
      setP2timeout(true);
    }
  }

  function endTurn() {
    let nine = rack.find((obj) => obj.num === 9);
    if (nine.status === "pocketed" && breakStatus === true) {
        let count = 0
        let countDead = rack.map(obj => {
            if (obj.status !== 'pocketed') {
                obj.status = 'dead'
                count++
            }

            return obj
        })

        setRack(countDead)
        setDeadBalls(count)
        setInnings((prevState) => (prevState["9S"] = true));
        return endGame()
    } else {
        setBreakStatus(false);

        if (currentPlayer === p2name) {
        const inning = new Inning();
        setInningsCount((prevState) => prevState++);
        inning.count = inningsCount;
        setInnings(innings.push(inning));
        }

        setCurrentPlayer((prevState) => prevState === p1name ? p2name : p1name);
    }
  }

  function endGame() {
    if (p1score === 10 && breakStatus === true) {
      setP1score(10);
      setP2score(0);
      setInnings((prevState) => (prevState["BR"] = true));
    }
    if (total === 10) {
      alert('game over!')
    }
  }

  return (
    <div className="table">
      <h2>Current Player: {currentPlayer}</h2>
      <div className="scoreboard">
        <div>
          <h2>{p1name}</h2>
          <div>{p1score}</div>
        </div>
        <div>
          <h2>{p2name}</h2>
          <div>{p2score}</div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-16 rotate-45">
        {rack?.map((ball) => {
          return (
            <Ball
              number={ball.num}
              status={ball.status}
              onClick={() => pocketBall(ball.num)}
            />
          );
        })}
      </div>
      <button onClick={scratchFoul}>Scratch/Foul</button>
      {total !== 10 ?
          <button onClick={endTurn}>End turn</button>
          :
          <button onClick={endGame}>End game</button>
      }
    </div>
  );
}
