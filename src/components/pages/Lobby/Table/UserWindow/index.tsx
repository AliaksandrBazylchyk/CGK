import React from 'react';

import './styles.scss';

const UserWindow = () => {
  return (
    <div className="userwindow">
      <div className="userwindow__webcam"></div>
      <span className="userwindow__info">Chabat</span>
      {
        <span className="userwindow__info">Ready</span>
        ||<button>ready</button>
      }
    </div>
  )
};

export default UserWindow;