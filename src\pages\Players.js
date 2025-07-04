import React from 'react';
import playerData from '../data/players';

function Players() {
  return (
    <div>
      <h1>Players</h1>
      <ul>
        {playerData.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Players;