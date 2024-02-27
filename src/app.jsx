import { useState, useEffect } from 'preact/hooks';
import { Header } from './components/header';
import Router from 'preact-router';
import { AddPlayer } from './views/addPlayer';
import { Match } from './views/match';
import { MatchStart } from './views/matchStart';

export function App() {
    return (
        <>
            <Header />
            <Router>
                <MatchStart path="/" />
                <Match path="/match/:id" />
                <AddPlayer path="/add" />
            </Router>
        </>
    );
}
