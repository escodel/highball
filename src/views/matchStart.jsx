import { useState } from 'preact/hooks';
import { getItem, setItem } from '../utils/localStorage';
import { route } from 'preact-router';
import { NewGame } from '../utils/types';

export function MatchStart() {
    // select players.. conditional based on team vs. singles?
    const players = getItem('players');
    let matches = getItem('matches');
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [scoreKeeper, setScoreKeeper] = useState(null);
    const [selectedMatch, setSelectedMatch] = useState(null);
    const [winnerBreak, setWinnerBreak] = useState(true);

    function startMatch(e) {
        e.preventDefault();
        let p1;
        let p2;
        let sk;

        players.forEach((obj) => {
            if (obj.playerNumber === player1) {
                p1 = obj;
            }
            if (obj.playerNumber === player2) {
                p2 = obj;
            }
            if (obj.playerNumber === scoreKeeper) {
                sk = obj;
            }
        });

        let newGame = new NewGame();
        const newMatch = {
            id: Math.floor(Math.random() * 10000),
            inProgress: true,
            p1name: p1.name,
            p2name: p2.name,
            p1Id: p1.playerNumber,
            p2Id: p2.playerNumber,
            p1runningTotal: 0,
            p2runningTotal: 0,
            p1pointsToWin: p1.pointsToWin,
            p2pointsToWin: p2.pointsToWin,
            matchWinner: null,
            scoreKeeperName: sk.name,
            scoreKeeperId: sk.playerNumber,
            startDate: new Date(),
            startTime: Date.now(),
            endTime: null,
            games: [newGame],
            winnerBreak: winnerBreak,
        };

        if (!matches) {
            setItem('matches', [newMatch]);
        } else {
            setItem('matches', [...matches, newMatch]);
        }

        loadMatch(newMatch.id);
    }

    function loadMatch(matchId) {
        return route(`/match/${matchId}`);
    }

    return (
        <>
            {players && (
                <form className="flex flex-col space-y-4">
                    <label>
                        <select
                            value={player1}
                            onChange={(e) => setPlayer1(e.target.value)}
                            className="form-input"
                        >
                            <option value="placeholder" selected disabled>
                                Select player
                            </option>
                            {players.map((obj) => {
                                return (
                                    <option value={obj.playerNumber}>
                                        {obj.name} -- {obj.playerNumber}
                                    </option>
                                );
                            })}
                        </select>
                        Player 1 (Lag Winner)
                    </label>
                    <label>
                        <select
                            value={player2}
                            onChange={(e) => setPlayer2(e.target.value)}
                            className="form-input"
                        >
                            <option value="placeholder" selected disabled>
                                Select player
                            </option>
                            {players.map((obj) => {
                                return (
                                    <option value={obj.playerNumber}>
                                        {obj.name} -- {obj.playerNumber}
                                    </option>
                                );
                            })}
                        </select>
                        Player 2
                    </label>
                    <label>
                        <select
                            value={scoreKeeper}
                            onChange={(e) => setScoreKeeper(e.target.value)}
                            className="form-input"
                        >
                            <option value="placeholder" selected disabled>
                                Select scorekeeper
                            </option>
                            {players.map((obj) => {
                                return (
                                    <option value={obj.playerNumber}>
                                        {obj.name} -- {obj.playerNumber}
                                    </option>
                                );
                            })}
                        </select>
                        Scorekeeper
                    </label>
                    <label>
                        <input
                            id="winner-yes"
                            type="radio"
                            name="winner-break"
                            value={true}
                            checked={winnerBreak === true}
                            onChange={(e) => setWinnerBreak(e.target.value)}
                        />
                        Winner Break
                    </label>
                    <label>
                        <input
                            id="winner-no"
                            type="radio"
                            name="winner-break"
                            value={false}
                            checked={winnerBreak === false}
                            onChange={(e) => setWinnerBreak(e.target.value)}
                        />
                        Alternate Break
                    </label>
                    <button onClick={(e) => startMatch(e)} className="border">
                        Start match
                    </button>

                    {matches && (
                        <>
                            <select
                                value={selectedMatch}
                                onChange={(e) =>
                                    setSelectedMatch(e.target.value)
                                }
                                className="form-input"
                            >
                                <option value="placeholder" selected disabled>
                                    Select match
                                </option>
                                {matches.map((obj) => {
                                    return (
                                        <option value={obj.id}>
                                            {obj.p1name} v. {obj.p2name} $
                                            {new Date(
                                                obj.startTime
                                            ).toDateString()}
                                        </option>
                                    );
                                })}
                            </select>
                            <button
                                onClick={(e, id) => loadMatch(id)}
                                className="border"
                            >
                                Resume match
                            </button>
                        </>
                    )}
                </form>
            )}
        </>
    );
}
