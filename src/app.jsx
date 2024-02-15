import { useState, useEffect } from 'preact/hooks'
import { Header } from './components/header'
import Router from 'preact-router'
import { AddPlayer } from './views/addPlayer'
import { CurrentGame } from './views/currentGame'
import { GameStart } from './views/gameStart'

export function App() {
  return (
    <>
        <Header />
        <Router>
            <GameStart path='/' />
            <CurrentGame path='/game/:id' />
            <AddPlayer path='/add' />
        </Router>
    </>
  )
}
