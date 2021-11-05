import React from 'react';
import LobbySettings from './LobbySettings';

import './styles.scss';

const Functional = () => {
  return (
    <div className="functional">
      <button>EXIT</button>
      <LobbySettings />
      <button>START</button>
    </div>
  )
}

export default Functional;