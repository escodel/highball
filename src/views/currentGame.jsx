import { useState, useEffect } from "preact/hooks"
import { Ball } from "../components/ball"

export function CurrentGame(props) {
    const { id } = props
    const [balls, setBalls] = useState([])
    const [currentGameId, setCurrentGameId] = useState(null)
    const [gameData, setGameData] = useState({})

    useEffect(() => {
        // diamond rack order
        let tmp = [1, 3, 6, 2, 9, 7, 4, 6, 8]

        setBalls(tmp)
        setCurrentGameId(id)

        if (localStorage.getItem('games')) {
            let data = JSON.parse(localStorage.getItem('games'))
            let filt = data.filter(obj => Number(obj.id) === Number(id))
            setGameData(filt[0])
        }
    }, [])

    return (
        <div className="table">
            <div className="scoreboard">
                <div>
                    <h2>{gameData.p1Name}</h2>
                    <div>{gameData.p1score}</div>
                </div>
                <div>
                    <h2>{gameData.p2Name}</h2>
                    <div>{gameData.p2score}</div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap w-16 rotate-45">
                {balls.map(ball => {
                    return <Ball number={ball} />
                })}
            </div>
        </div>
    )
}