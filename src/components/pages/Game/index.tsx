import React from 'react';
import './styles.scss';
import Roulette from './Roulette';

const Lobby = () => {
  const users = [
    {
      name: 'John',
      socket_token: 123,
    },
    {
      name: 'Kenny',
      socket_token: 123,
    },
    {
      name: 'Olaf',
      socket_token: 123,
    },
    {
      name: 'Sven',
      socket_token: 123,
    },
    {
      name: 'Kacy',
      socket_token: 123,
    },
    {
      name: 'Kacy',
      socket_token: 123,
    },
  ];

  return (
    <div className="game">
      <div className="game__top">
        {users.map((user) => (
          <div key={user.name} className="webcam" id={user.name}></div>
        ))}
      </div>
      <div className="game__lefts">a</div>
      <div className="game__center">
        <Roulette />
      </div>

      <div className="game__rights">a</div>
    </div>
  );
};

export default Lobby;
