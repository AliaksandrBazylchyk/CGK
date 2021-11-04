import React from 'react';

import Table from './Table';
import Functional from './Functional';

import './styles.scss';

const Lobby = () => {
  return (
    <div className="lobby">
      <Table />
      <Functional />
    </div>
  )
};

export default Lobby;