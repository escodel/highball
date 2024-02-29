import { useState, useEffect } from 'preact/hooks';
import { Game } from '../components/game';
import { MatchScore } from '../components/matchScore';
import { getItem, setItem } from '../utils/localStorage';

export function Match() {
    const path = window.location.pathname.split('/');
    const [matchData, setMatchData] = useState({});
    const [matchId, setMatchId] = useState(null);
    const [games, setGames] = useState([]);
    const [gameNumber, setGameNumber] = useState(1);
    const [breakingPlayer, setBreakingPlayer] = useState('');

    useEffect(() => {
        let data = getItem('matches');
        let result = data.filter((obj) => obj.id === Number(path[2]));
        setMatchId(result[0].id);
        setMatchData(result[0]);
        setGames(result[0].games);
        setBreakingPlayer(result[0].p1name);
    }, []);

    function nextGame(gameData) {
        if (!gameData) return;
        const matches = getItem('matches');
        const updatedMatches = matches.map((obj) => {
            if (obj.id === matchId) {
                obj.games[gameNumber - 1] = gameData;
                obj.p1runningTotal += gameData.p1score;
                obj.p2runningTotal += gameData.p2score;
            }

            if (obj.p1runningTotal >= obj.p1pointsToWin) {
                alert(`${matchData.p1name} wins the match!`);
            }
            if (obj.p2runningTotal >= obj.p2pointsToWin) {
                alert(`${matchData.p2name} wins the match!`);
            }

            return obj;
        });

        if (matchData.winnerBreak) {
            setBreakingPlayer(gameData.winner);
        } else {
            setBreakingPlayer((prevState) =>
                prevState === matchData.p1name
                    ? matchData.p2name
                    : matchData.p1name
            );
        }

        setItem('matches', updatedMatches);
        setGames((prevState) => [...prevState, gameData]);
        setGameNumber((prevState) => prevState + 1);
    }

    return (
        <>
            {matchData && (
                <>
                    <MatchScore games={games} gameNumber={gameNumber} />
                    <Game
                        key={`game-${gameNumber}`}
                        p1name={matchData.p1name}
                        p2name={matchData.p2name}
                        breakingPlayer={breakingPlayer}
                        nextGame={nextGame}
                    />
                </>
            )}
        </>
    );
}
