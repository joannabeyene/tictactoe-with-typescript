import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import Start from './components/Start';
import Finished from './components/Finished';
import UseTicTacToe from './components/UseTicTacToe';

function App() {
  const game = UseTicTacToe();
  return (
    <div className="App">
      <h1>TicTacToe</h1>
      {game.gameStatus === 'started' && <Game handleClick={game.handleClick}/>}
      {game.gameStatus === 'new' && <Start />}
      {game.gameStatus === 'finished' && <Finished/>}
    </div>
  );
}

export default App;
