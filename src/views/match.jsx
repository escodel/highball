import { useState, useEffect } from 'preact/hooks';
import { Game } from '../components/game';
import { MatchScore } from '../components/matchScore';
import { getItem, setItem } from '../utils/localStorage';

export function Match(props) {
    const { winnerBreak } = props;
    const path = window.location.pathname.split('/');
    const [matchData, setMatchData] = useState({});
    const [matchId, setMatchId] = useState(null);
    const [gameNumber, setGameNumber] = useState(1);
    const [breakingPlayer, setBreakingPlayer] = useState(null);
    const [currentPlayer, setCurrentPlayer] = useState(null);

    useEffect(() => {
        let data = getItem('matches');
        let result = data.filter((obj) => obj.id === Number(path[2]));
        setMatchId(result[0].id);
        setMatchData(result[0]);
        setBreakingPlayer(result[0].p1name);
        setCurrentPlayer(result[0].p1name);
    }, []);

    function nextGame(gameData) {
        const matches = getItem('matches');
        const updatedMatches = matches.map((obj) => {
            obj.p1runningTotal += gameData.p1score;
            obj.p1runningTotal += gameData.p2score;

            if (obj.id === matchId) {
                obj.games[gameNumber - 1] = gameData;
            }

            if (
                obj.p1runningTotal >= obj.p1pointsToWin ||
                obj.p2runningTotal >= obj.p2pointsToWin
            ) {
                alert('win!');
            }

            return obj;
        });
        setItem('matches', updatedMatches);
        setGameNumber((prevState) => prevState + 1);
        if (winnerBreak) {
        }
    }

    function endMatch() {
        // TODO
    }

    return (
        <>
            {matchData && (
                <>
                    <MatchScore gameNumber={gameNumber} />
                    <Game
                        key={`game-${gameNumber}`}
                        p1name={matchData.p1name}
                        p2name={matchData.p2name}
                        breakingPlayer={breakingPlayer}
                        currentPlayer={currentPlayer}
                        setCurrentPlayer={setCurrentPlayer}
                        gameNumber={gameNumber}
                        setGameNumber={setGameNumber}
                        nextGame={nextGame}
                    />
                </>
            )}
        </>
    );
}
