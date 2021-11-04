import React from 'react';

import Guest from './Guest';
import Logged from './Logged';

const isAuthorizated = false;

const Main = () => {
  return (
    <>
      {
        !isAuthorizated ? <Guest /> : <Logged />
      }
    </>
  )
}

export default Main;