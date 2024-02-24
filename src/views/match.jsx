import { useState, useEffect } from "preact/hooks";
import { Game } from "../components/game";
import { MatchScore } from "../components/matchScore";
import { getItem } from "../utils/localStorage";

export function Match(props) {
    const path = window.location.pathname.split('/')
    const [matchData, setMatchData] = useState({})
//   const [p1score, setP1score] = useState(null)
//   const [p2score, setP2score] = useState(null)
//   const [deadBalls, setDeadBalls] = useState(0)
//   const [innings, setInnings] = useState({})
  const [gameNumber, setGameNumber] = useState(1)
  const [total, setTotal] = useState(0)
//   const [gameData, setGameData] = useState({})

  useEffect(() => {
    let data = getItem('matches')
    let result = data.filter(obj => obj.id === Number(path[2]))
    setMatchData(result[0])
  }, [])

  function endGame(gameData) {
    gameData.gameNumber = gameNumber
    setMatchData({
        ...matchData,
        games: [...matchData.games, gameData]
    })
    setGameNumber(prevState => prevState + 1)
    console.log(gameNumber)
  }

  return (
    <>
    {matchData && (
        <>
      <MatchScore gameNumber={gameNumber} />
      <Game p1name={matchData.p1Name} p2name={matchData.p2Name} breakingPlayer={matchData.p1Name} endGame={endGame} />
    </>
    )}
      </>
  );
}
