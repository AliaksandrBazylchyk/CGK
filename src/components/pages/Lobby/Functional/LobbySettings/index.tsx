import React from 'react';

import './styles.scss';

const LobbySettings = () => {

  const lobby = {
    name: 'Lobby',
    pack: 'Pack',
  }

  return (
    <div className="lobby_settings">
      <div className="lobby_settings__section">
        <span>Lobby name</span>
        <input type="text" value={lobby.name} />
      </div>
      <div className="lobby_settings__section">
        <span>Pack name</span>
        <input type="text" value={lobby.pack} />
      </div>
    </div>
  )
};

export default LobbySettings;