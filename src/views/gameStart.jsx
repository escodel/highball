import { Link, route } from "preact-router";
import { useEffect, useState } from "preact/hooks";

export function GameStart() {
  const [playerList, setPlayerList] = useState([]);
  const [games, setGames] = useState([]);
  const [inProgressGames, setInProgressGames] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [player1, setPlayer1] = useState({});
  const [player2, setPlayer2] = useState({});

  useEffect(() => {
    if (localStorage.getItem("players")) {
      setPlayerList(JSON.parse(localStorage.getItem("players")));
    }
    if (localStorage.getItem("games")) {
      setGames(JSON.parse(localStorage.getItem("games")));
    }

    const options = games.filter((game) => game.inProgress === true);
    setInProgressGames(options);
  }, []);

  useEffect(() => {
    const options = games.filter((game) => game.inProgress === true);
    setInProgressGames(options);
  }, [games]);

  const handlePlayerSelect = (e) => {
    if (e.target.id === "1") {
      const p1 = playerList.filter(
        (player) => player.id === Number(e.target.value),
      );
      setPlayer1(p1[0]);
    } else {
      const p2 = playerList.filter(
        (player) => player.id === Number(e.target.value),
      );
      setPlayer2(p2[0]);
    }
  };

  const handleNewGame = (e, player1, player2) => {
    e.preventDefault();
    const newGame = {
      id: Math.floor(Math.random() * 10000),
      inProgress: true,
      p1Name: player1.name,
      p2Name: player2.name,
      p1score: 0,
      p2score: 0,
      winner: null,
      scoreKeeper: player1.Id,
      startDate: new Date(),
      startTime: Date.now(),
      endTime: null,
      tableStatus: [],
    };
    const gamesPlusNew = [...games, newGame];
    setGames(gamesPlusNew);
    setGameId(newGame.id);
    localStorage.setItem("games", JSON.stringify(gamesPlusNew));

    loadGame();
  };

  const loadGame = () => {
    if (!gameId) {
      return false;
    }

    return route(`/game/${gameId}`);
  };

  return (
    <>
      <form>
        {inProgressGames.length > 0 && (
          <div>
            <label>Resume Game</label>
            <select id="game" onChange={(e) => setGameId(e.target.value)}>
              <option disabled value="placeholder" selected>
                Select game
              </option>
              {inProgressGames.map((game) => {
                return (
                  <option
                    value={game.id}
                  >{`${game.p1Name} vs. ${game.p2Name} - ${game.startDate}`}</option>
                );
              })}
            </select>
            <a onClick={loadGame}>Resume Game</a>
          </div>
        )}
        <div>
          <label>Player One</label>
          <select id={1} onChange={handlePlayerSelect}>
            <option disabled value="placeholder" selected>
              Select Player 1
            </option>
            {playerList.map((player) => {
              return (
                <option
                  value={player.id}
                >{`${player.name} - ${player.id}`}</option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Player Two</label>
          <select id={2} onChange={handlePlayerSelect}>
            <option disabled value="placeholder" selected>
              Select Player 2
            </option>
            {playerList.map((player) => {
              return (
                <option
                  value={player.id}
                >{`${player.name} - ${player.id}`}</option>
              );
            })}
          </select>
        </div>
        <a onClick={(e) => handleNewGame(e, player1, player2)}>
          Start New Game
        </a>
      </form>
    </>
  );
}
