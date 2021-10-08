import React from 'react';

interface Props {
    handleClick(index: number): void;
}

function Game(props: Props) {
  return (
    <div>
      <h1>Game</h1>
    </div>
  );
}

export default Game;
