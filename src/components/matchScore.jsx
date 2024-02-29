export function MatchScore(props) {
    const { games, gameNumber } = props;

    return (
        <>
            <h3>Rack #{gameNumber}</h3>
            {games?.length > 0 && (
                <table>
                    <tr>
                        <th className="text-left pr-3">Rack</th>
                        {games.map((obj, index) => {
                            if (!obj.endTime) return;
                            return (
                                <td
                                    key={`game-${index + 1}`}
                                    className="border-2 px-2"
                                >
                                    {index + 1}
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <th className="text-left pr-3">Score</th>
                        {games.map((obj) => {
                            if (!obj.endTime) return;
                            return (
                                <td
                                    key={`player1-${obj.id}`}
                                    className="border-2 px-2"
                                >
                                    {obj.p1score}
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <th className="text-left pr-3">Innings</th>
                        {games.map((obj) => {
                            if (!obj.endTime) return;
                            return (
                                <td
                                    key={`inning-${obj.id}`}
                                    className="border-2 px-2"
                                >
                                    {obj.innings.count > 0 &&
                                        new Array(obj.innings.count)
                                            .fill('')
                                            .map((_, index) => (
                                                <span key={index}>/</span>
                                            ))}
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <th className="text-left pr-3">Dead Balls</th>
                        {games.map((obj) => {
                            if (!obj.endTime) return;
                            return (
                                <td
                                    key={`db-${obj.id}`}
                                    className="border-2 px-2"
                                >
                                    {obj.deadBalls}
                                </td>
                            );
                        })}
                    </tr>
                    <tr>
                        <th className="text-left pr-3">Score</th>
                        {games.map((obj) => {
                            if (!obj.endTime) return;
                            return (
                                <td
                                    key={`player2-${obj.id}`}
                                    className="border-2 px-2"
                                >
                                    {obj.p2score}
                                </td>
                            );
                        })}
                    </tr>
                </table>
            )}
        </>
    );
}
