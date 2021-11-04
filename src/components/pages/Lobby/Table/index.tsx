import React from 'react';

import UserWindow from './UserWindow';

import './styles.scss';

const Table = () => {
  return (
    <div className="table">
      <div className="table__extreme_row">
        <UserWindow />
        <UserWindow />
      </div>
      <div className="table__central_row">
        <UserWindow />
        <UserWindow />
        <UserWindow />
      </div>
      <div className="table__extreme_row">
        <UserWindow />
        <UserWindow />
      </div>
    </div>
  )
};

export default Table;