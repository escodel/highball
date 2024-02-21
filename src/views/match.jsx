import { Game } from "../components/game";
import { MatchScore } from "../components/matchScore";

export function Match() {
    const p1name = 'Dillen'
    const p2name = 'Heathren'
    return (
        <>
            <MatchScore />
            <Game p1name={p1name} p2name={p2name} />
        </>
    )
}