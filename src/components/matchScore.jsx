import { useState, useEffect } from "preact/hooks";

export function MatchScore(props) {
  const { gameNumber } = props;

  return (
    <>
        <h3>{gameNumber}</h3>
        <table>
          {/* <tr>
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
          </tr> */}
        </table>

    </>
  );
}
