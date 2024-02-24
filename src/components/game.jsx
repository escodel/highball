import { useEffect, useReducer, useState } from "preact/hooks";
import { Ball } from "./ball";

export function Game(props) {
  const { p1name, p2name, endGame, breakingPlayer } = props;
  const [currentPlayer, setCurrentPlayer] = useState(p1name);
  const [p1score, setP1score] = useState(0);
  const [p2score, setP2score] = useState(0);
  const [total, setTotal] = useState(0);
  const [inningsCount, setInningsCount] = useState(0);
  const [innings, setInnings] = useState(null);
  const [deadBalls, setDeadBalls] = useState(0);
  const [p1fouls, setP1fouls] = useState(0);
  const [p2fouls, setP2fouls] = useState(0);
  const [p1timeout, setP1timeout] = useState(false);
  const [p2timeout, setP2timeout] = useState(false);
  const [rack, setRack] = useState([]);
  const [show9S, setShow9S] = useState(false);
  const [breakStatus, setBreakStatus] = useState(true)
  // const [targetBall, setTargetBall] = useState(1)
  const [gameData, setGameData] = useState({})

  function BallDetails(num, status) {
    return {
      num,
      status,
    };
  }

  function Inning() {
    return {
      "9S": false,
      BR: false,
      T: false,
    };
  }

  useEffect(() => {
    let rack = [8, 7, 5, 6, 9, 3, 4, 2, 1];
    rack.forEach((num, i) => {
      //   let status = num === 1 ? "active" : "neutral";
      rack[i] = new BallDetails(num, "neutral");
    });
    setRack(rack);

    const inning = new Inning();
    inning.count = 1;
    setInnings([inning]);
    setGameData({
        id: Math.floor(Math.random() * 100000),
        inProgress: true,
        p1score: 0,
        p2score: 0,
        winner: null,
        startTime: Date.now(),
        endTime: null,
    })
  }, []);

  useEffect(() => {
    setTotal(p1score + p2score + deadBalls);
  }, [p1score, p2score, deadBalls]);

  function increment(n) {
    return n === 9 ? 2 : 1;
  }

  function decrement(n) {
    return n === 9 ? -2 : -1;
  }

  function handleBallStatus(num) {
    let curr = rack.find((obj) => Number(obj.num) === Number(num));
    let callHook;
    if (currentPlayer === p1name) {
      callHook = (val) => setP1score((prevState) => prevState + val);
    } else {
      callHook = (val) => setP2score((prevState) => prevState + val);
    }

    switch (curr.status) {
      case "neutral":
        curr.status = "pocketed";
        callHook(increment(num));
        break;
      case "pocketed":
        curr.status = "dead";
        setDeadBalls(prevState => prevState + 1)
        callHook(decrement(num));
        break;
      case "dead":
        curr.status = "neutral";
        setDeadBalls(prevState => prevState - 1)
        break;
    }

    setRack((prevState) => {
      let objRack = prevState.find((obj) => Number(obj.num) === Number(num));
      objRack = curr;
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
    if (nine.status === "pocketed") {
      let count = 0;
      let countDead = rack.map((obj) => {
        if (obj.status !== "pocketed") {
          obj.status = "dead";
          count++;
        }

        return obj;
      });

      setRack(countDead);
      setDeadBalls(count);
      if (breakStatus) {
        setShow9S(true);
        setInnings((prevState) => (prevState["9S"] = true));
      }
      return endGame(gameData);
    } else {
      setBreakStatus(false);

      if (currentPlayer === p2name) {
        const inning = new Inning();
        setInningsCount((prevState) => prevState++);
        inning.count = inningsCount;
        setInnings(innings.push(inning));
      }

      setCurrentPlayer((prevState) => (prevState === p1name ? p2name : p1name));
    }
  }

  function undo() {
    let undo = rack.map((obj) => {
      if (obj.status === "dead") {
        obj.status = "neutral";
      }

      return obj;
    });

    setRack(undo);
    setDeadBalls(0);
    if (show9S) {
      setShow9S(false);
    }
  }

  return (
    <div className="table">
        <h2>Breaking: {breakingPlayer}</h2>
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
      <div
        className={`${show9S ? "pointer-events-none" : ""} flex flex-row flex-wrap relative z-0 w-16 rotate-45`}
      >
        {rack?.map((ball) => {
          return (
            <Ball
              number={ball.num}
              status={ball.status}
              onClick={() => handleBallStatus(Number(ball.num))}
            />
          );
        })}
        <div
          className={`${show9S ? "visible" : "invisible"} absolute -rotate-45 z-10`}
        >
          9 ON THE SNAP
        </div>
      </div>
      <button onClick={scratchFoul}>Scratch/Foul</button>
      {total !== 10 ? (
        <button onClick={endTurn}>End turn</button>
      ) : (
        <button onClick={() => endGame(gameData)}>End game</button>
      )}
      <button onClick={undo}>Undo turn</button>
    </div>
  );
}
