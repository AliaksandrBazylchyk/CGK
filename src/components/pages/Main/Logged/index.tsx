import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const lobbies = [
  {
    name: 'John`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Hardest ever pack',
    game_token: '1',
  },
  {
    name: 'Kate`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Easy pack',
    game_token: '2',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
  {
    name: 'Mary`s lobby',
    quantity: '2',
    leader: 'Benjamin',
    pack: 'Dota 2',
    game_token: '3',
  },
];

const Logged = () => {
  return (
    <div className="logged_page">
      <p className="greetings">Выберите свою игру: </p>
      <div className="lobby_list">
        <div className="lobby_list_header">
          <p className="lobby_name">lobby name</p>
          <p className="quantity_">QUA</p>
          <p className="leader_name">Leader</p>
          <p className="pack_name">Pack name</p>
          <p className="connection_button_text">Connect button</p>
        </div>
        <div className="lobby_table">
          {lobbies.map((lobby) => (
            <div key={lobby.name} className="line_splitting">
              <span className="lobby_name">{lobby.name}</span>
              <span className="quantity_">{lobby.quantity}</span>
              <span className="leader_name">{lobby.leader}</span>
              <span className="pack_name">{lobby.pack}</span>
              <div className="connection_button">
                <Link className="connection_link" to='/lobby'>
                  <button>
                    Connect
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="control_table">
          <button className="control_table_button">hello</button>
        </div>
      </div>
    </div>
  );
};

export default Logged;
