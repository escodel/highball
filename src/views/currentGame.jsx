import { useState, useEffect } from "preact/hooks";
import { Ball } from "../components/ball";

export function CurrentGame(props) {
  const { id } = props;
  const [balls, setBalls] = useState([]);
  const [currentGameId, setCurrentGameId] = useState(null);
  const [gameData, setGameData] = useState({});

  const getLocalStorage = () => {
    return localStorage.getItem("games");
  };
  const setLocalStorage = () => {
    return localStorage.setItem();
  };

  useEffect(() => {
    // diamond rack order
    const tmp = [8, 7, 5, 6, 9, 3, 4, 2, 1];
    function Obj() {
      return { num: null, ballStatus: "neutral" };
    }
    tmp.forEach((n, i) => {
      let tmpObj = new Obj();
      tmpObj.num = n;
      // if (n === 1) {
      //     tmpObj.status === 'point'
      // }
      tmp[i] = tmpObj;
    });

    if (localStorage.getItem("games")) {
      let data = JSON.parse(getLocalStorage());
      let idx = data.findIndex((obj) => Number(obj.id) === Number(id));

      if (data[idx].tableStatus.length < 1) {
        data[idx].tableStatus = tmp;
      } else {
        setBalls(data[idx].tableStatus);
      }

      setGameData(data[idx]);
      localStorage.setItem("games", JSON.stringify(data));
    } else {
      setBalls(tmp);
    }

    setCurrentGameId(id);
  }, []);

  const handleStatusUpdate = (e) => {
    let idx = gameData.tableStatus.findIndex(
      (ball) => ball.num === e.target.value,
    );
    gameData.tableStatus[idx].ballStatus = "pocketed";
    localStorage.setItem("games", JSON.stringify(data));
  };

  return (
    <div className="table">
      <div className="scoreboard">
        <div>
          <h2>{gameData.p1Name}</h2>
          <div>{gameData.p1score}</div>
        </div>
        <div>
          <h2>{gameData.p2Name}</h2>
          <div>{gameData.p2score}</div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap w-16 rotate-45">
        {balls?.map((ball) => {
          return (
            <Ball
              number={ball.num}
              status={ball.status}
              onClick={handleStatusUpdate}
            />
          );
        })}
      </div>
    </div>
  );
}
