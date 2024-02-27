import { useEffect, useState } from 'preact/hooks';
import { getItem, setItem } from '../utils/localStorage';
import { route } from 'preact-router';
import { newGame } from '../utils/types';

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

        const newMatch = {
            id: Math.floor(Math.random() * 10000),
            inProgress: true,
            p1name: p1.name,
            p2name: p2.name,
            p1Id: p1.playerNumber,
            p2Id: p2.playerNumber,
            matchWinner: null,
            scoreKeeperName: sk.name,
            scoreKeeperId: sk.playerNumber,
            startDate: new Date(),
            startTime: Date.now(),
            endTime: null,
            games: [newGame],
            winnerBreak,
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
                <form>
                    <label>
                        <select
                            value={player1}
                            onChange={(e) => setPlayer1(e.target.value)}
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
                            type="radio"
                            name="winner-break"
                            checked={winnerBreak}
                            onChange={() => setWinnerBreak(true)}
                        />
                        Winner Break
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="winner-break"
                            checked={!winnerBreak}
                            onChange={() => setWinnerBreak(false)}
                        />
                        Alternate Break
                    </label>
                    <button onClick={(e) => startMatch(e)}>Start match</button>

                    {matches && (
                        <>
                            <select
                                value={selectedMatch}
                                onChange={(e) =>
                                    setSelectedMatch(e.target.value)
                                }
                            >
                                <option value="placeholder" selected disabled>
                                    Select match
                                </option>
                                {matches.map((obj) => {
                                    return (
                                        <option value={obj.id}>
                                            {obj.player1} v. {obj.player2}
                                        </option>
                                    );
                                })}
                            </select>
                            <button onClick={(e, id) => loadMatch(id)}>
                                Resume match
                            </button>
                        </>
                    )}
                </form>
            )}
        </>
    );
}
