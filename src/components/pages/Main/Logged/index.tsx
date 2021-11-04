import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.scss";

const lobbies = [
  {
    name: "John's lobby",
    quantity: "2",
    leader: "Benjamin",
    pack: "Hardest ever pack",
    game_token: "1",
  },
  {
    name: "Kate's lobby",
    quantity: "2",
    leader: "Benjamin",
    pack: "Easy pack",
    game_token: "2",
  },
  {
    name: "Mary's lobby",
    quantity: "2",
    leader: "Benjamin",
    pack: "Dota 2",
    game_token: "3",
  },

]

const Logged = () => {
  return (
    <div className="logged_page">
      <div className="lobby_list">
        <div className="lobby_list_header">
          <p className="lobby_name ">lobby name</p>
          {/*<p>{lobby.handler}</p>*/}
          <p className="quantity_">QUA</p>
          <p className="leader_name">Leader</p>
          <p className="pack_name">Pack name</p>
          <p className="connection_button">Connect button</p>
        </div>
        <div className="lobby_table">
          {lobbies.map((lobby) => (
            <div key={lobby.name} className="line_splitting">
              <div className="lobby_name">
                {lobby.name}
              </div>
              <div className="quantity_">
                {lobby.quantity}
              </div>
              <div className="leader_name">
                {lobby.leader}
              </div>
              <div className="pack_name">
                {lobby.pack}
              </div>
              <div className="connection_button">
                <Link className="connection_link" to='/lobby'>
                  <button>
                    Connect
                  </button>
                </Link>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Logged;