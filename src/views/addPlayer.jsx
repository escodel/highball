import { useEffect, useState } from 'preact/hooks';
import { getItem, setItem } from '../utils/localStorage';

export function AddPlayer() {
    const [playerNumber, setPlayerNumber] = useState(null);
    const [teamNumber, setTeamNumber] = useState(null);
    const [name, setName] = useState('');
    const [skillLevel, setSkillLevel] = useState(null);
    const [pointsToWin, setPointsToWin] = useState(null);

    useEffect(() => {
        const map = {
            1: 14,
            2: 19,
            3: 25,
            4: 31,
            5: 38,
            6: 46,
            7: 55,
            8: 65,
            9: 75,
        };

        setPointsToWin(map[skillLevel]);
    }, [skillLevel]);

    const handleClick = (e) => {
        e.preventDefault();

        if (!name) {
            return false;
        }

        const playersList = getItem('players') || [];
        const obj = {
            playerNumber,
            name,
            skillLevel,
            pointsToWin,
            gamesWon: 0,
        };

        if (playersList) {
            playersList.push(obj);
        }

        setItem('players', playersList);
        setName('');
        setPlayerNumber(null);
        setTeamNumber(null);
        setSkillLevel(1);
    };

    return (
        <form>
            <div>
                <label>Player Number</label>
                <input
                    type="number"
                    value={playerNumber}
                    onChange={(e) => setPlayerNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Team Number</label>
                <input
                    type="number"
                    value={teamNumber}
                    onChange={(e) => setTeamNumber(e.target.value)}
                />
            </div>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <select
                value={skillLevel}
                onChange={(e) => setSkillLevel(Number(e.target.value))}
                required
            >
                <option value="placeholder" selected disabled>
                    Select skill level
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
            </select>
            <button onClick={handleClick}>Add Player</button>
        </form>
    );
}
