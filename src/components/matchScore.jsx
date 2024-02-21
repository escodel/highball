import { useState, useEffect } from "preact/hooks"

export function MatchScore(props) {
    const { p1score, p2score, deadBalls, innings } = props
    const [rows, setRows] = useState([])

    useEffect(() => {
        setRows(prevState => prevState.push({p1score, p2score, deadBalls, innings}))
    }, [])

    return (
        <>
            {rows.length > 0 && (
                <table>
                    <tr>
                        <th>Score</th>
                        <td>{p1score}</td>
                    </tr>
                    <tr>
                        <th>Innings</th>
                        <td>{innings}</td>
                    </tr>
                    <tr>
                        <th>Dead Balls</th>
                        <td>{deadBalls}</td>
                    </tr>
                    <tr>
                        <th>Score</th>
                        <td>{p2score}</td>
                    </tr>
                </table>
            )}
        </>
    )
}