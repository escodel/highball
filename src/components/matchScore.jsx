import { useState, useEffect } from 'preact/hooks';
import { getItem } from '../utils/localStorage';

export function MatchScore(props) {
    const { games, gameNumber } = props;

    return (
        <>
            {games?.length > 0 && (
                <>
                    <h3>{gameNumber}</h3>
                    <table>
                        <tr>
                            <th className="text-left pr-3">Score</th>
                            {games.map((obj) => {
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
                                return (
                                    <td
                                        key={`inning-${obj.id}`}
                                        className="border-2 px-2"
                                    >
                                        {obj.innings.count &&
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
                </>
            )}
        </>
    );
}
