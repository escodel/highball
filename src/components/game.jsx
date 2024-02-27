import { useEffect, useReducer, useState } from 'preact/hooks';
import { Ball } from './ball';
import { NewGame } from '../utils/types';

export function Game(props) {
    const {
        p1name,
        p2name,
        nextGame,
        breakingPlayer,
        // currentPlayer,
        // setCurrentPlayer,
    } = props;
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
    const [breakStatus, setBreakStatus] = useState(true);
    // const [targetBall, setTargetBall] = useState(1)
    const [gameData, setGameData] = useState({});
    const [currentPlayer, setCurrentPlayer] = useState('');

    useEffect(() => {
        let rack = [8, 7, 5, 6, 9, 3, 4, 2, 1];
        rack.forEach((num, i) => {
            //   let status = num === 1 ? "active" : "neutral";
            rack[i] = new BallDetails(num, 'neutral');
        });
        setRack(rack);

        const inning = new Inning();
        const newGame = new NewGame();
        inning.count = 1;
        setInnings([inning]);
        setCurrentPlayer(breakingPlayer);
        setGameData(newGame);
    }, []);

    useEffect(() => {
        setTotal(p1score + p2score + deadBalls);
    }, [p1score, p2score, deadBalls]);

    function BallDetails(num, status) {
        return {
            num,
            status,
        };
    }

    function Inning() {
        return {
            '9S': false,
            BR: false,
            T: false,
        };
    }

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
            case 'neutral':
                curr.status = 'pocketed';
                callHook(increment(num));
                break;
            case 'pocketed':
                curr.status = 'dead';
                setDeadBalls((prevState) => prevState + 1);
                callHook(decrement(num));
                break;
            case 'dead':
                curr.status = 'neutral';
                setDeadBalls((prevState) => prevState - 1);
                break;
        }

        setRack((prevState) => {
            let objRack = prevState.find(
                (obj) => Number(obj.num) === Number(num)
            );
            objRack = curr;
            return prevState;
        });
    }

    function scratchFoul() {
        // TODO: fouling out if 3 turns in a row
        if (currentPlayer === p1name) {
            setP1fouls((prevState) => prevState + 1);
        } else {
            setP2fouls((prevState) => prevState + 1);
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
        if (currentPlayer === p2name) {
            const inning = new Inning();
            setInningsCount((prevState) => prevState + 1);
            inning.count = inningsCount;
            setInnings((prevState) => [...prevState, inning]);
            setGameData((prevState) => {
                return {
                    ...prevState,
                    p2score: p2score,
                };
            });
        } else {
            setGameData((prevState) => {
                return {
                    ...prevState,
                    p1score: p1score,
                };
            });
        }

        // Checking that 9 ball is pocketed and whether 9 on the Snap
        let nine = rack.find((obj) => Number(obj.num) === 9);
        if (nine.status === 'pocketed') {
            let count = 0;
            const countDead = rack.map((obj) => {
                if (obj.status !== 'pocketed') {
                    obj.status = 'dead';
                    count += 1;
                }

                return obj;
            });

            setRack(countDead);
            setDeadBalls(count);
            if (breakStatus) {
                setShow9S(true);
                setInnings((prevState) => (prevState['9S'] = true));
            }
            setGameData((prevState) => {
                return {
                    ...prevState,
                    p1score: p1score,
                    p2score: p2score,
                    inProgress: false,
                    winner: p1score > p2score ? p1name : p2name,
                    endTime: Date.now(),
                };
            });
        } else {
            setBreakStatus(false);
            // setCurrentPlayer((prevState) =>
            //     prevState === p1name ? p2name : p1name
            // );
        }
    }

    function undo() {
        let undo = rack.map((obj) => {
            if (obj.status === 'dead') {
                obj.status = 'neutral';
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
        <div class="border-4">
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
                className={`${show9S ? 'pointer-events-none' : ''} flex flex-row flex-wrap relative z-0 w-16 rotate-45`}
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
                    className={`${show9S ? 'visible' : 'invisible'} absolute -rotate-45 z-10`}
                >
                    9 ON THE SNAP
                </div>
            </div>
            <button onClick={() => scratchFoul()}>Scratch/Foul</button>
            {total !== 10 ? (
                <button onClick={() => endTurn()}>End turn</button>
            ) : (
                <button onClick={() => nextGame(gameData)}>End game</button>
            )}
            <button onClick={() => undo()}>Undo turn</button>
        </div>
    );
}
