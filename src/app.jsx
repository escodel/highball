import { useState, useEffect } from "preact/hooks";
import { Header } from "./components/header";
import Router from "preact-router";
import { AddPlayer } from "./views/addPlayer";
import { CurrentGame } from "./views/currentGame";
import { GameStart } from "./views/gameStart";
import { Game } from "./components/game";
import { Match } from "./views/match";
import { MatchStart } from "./views/matchStart";
import { signal } from "@preact/signals";

export function App() {
  return (
    <>
      <Header />
      <Router>
        <MatchStart path="/" />
        <Match path="/match/:id" />
        <CurrentGame path="/game/:id" />
        <AddPlayer path="/add" />
      </Router>
    </>
  );
}
