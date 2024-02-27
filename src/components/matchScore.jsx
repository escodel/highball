import { useState, useEffect } from 'preact/hooks';
import { getItem } from '../utils/localStorage';

export function MatchScore(props) {
    const { matchId, gameNumber } = props;
    const [games, setGames] = useState([]);

    useEffect(() => {
        updateGames();
    }, []);

    useEffect(() => {
        updateGames();
    }, [gameNumber]);

    function updateGames() {
        const match = getItem('matches').filter(
            (obj) => obj.id === Number(matchId)
        );
        setGames([...match[0].games]);
    }

    return (
        <>
            <h3>{gameNumber}</h3>
            <table>
                <tr>
                    <th>Score</th>
                    {games.map((obj) => {
                        return <td key={`player1-${obj.id}`}>{obj.p1score}</td>;
                    })}
                </tr>
                <tr>
                    <th>Innings</th>
                    {/* <td>{innings}</td> */}
                </tr>
                <tr>
                    <th>Dead Balls</th>
                    {/* <td>{deadBalls}</td> */}
                </tr>
                <tr>
                    <th>Score</th>
                    {games.map((obj) => {
                        return <td key={`player2-${obj.id}`}>{obj.p2score}</td>;
                    })}
                </tr>
            </table>
        </>
    );
}
