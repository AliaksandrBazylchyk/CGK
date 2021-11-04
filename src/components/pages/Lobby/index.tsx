import React from 'react';

import Table from './Table';

import './styles.scss';
import Functional from './Functional';

const Lobby = () => {
  return (
    <div className="lobby">
      <Table />
      <Functional />
    </div>
  )
};

export default Lobby;