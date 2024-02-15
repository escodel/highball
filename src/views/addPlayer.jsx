import { useState } from "preact/hooks"

export function AddPlayer() {
    const [name, setName] = useState('')
    const [skillLevel, setSkillLevel] = useState(1)

    const handleClick = (e) => {
        e.preventDefault()
        const playersList = JSON.parse(localStorage.getItem('players')) || []
        const obj = {
            id: Math.floor(Math.random() * 100000),
            name,
            skillLevel,
            gamesWon: 0
        }

        if (playersList) {
            playersList.push(obj)
        }

        localStorage.setItem('players', JSON.stringify(playersList))
        setName('')
        setSkillLevel(1)
    }

    return (
        <form>
            <div>
                <label>
                    Name
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <select value={skillLevel} onChange={(e) => setSkillLevel(Number(e.target.value))}>
                <option value={1} selected>1</option>
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
    )
}