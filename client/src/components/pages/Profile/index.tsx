import React from 'react';

import PersonalInfo from './PersonalInfo';
import InfoChanger from './InfoChanger';
import PlayerHistory from './PlayerHistory';

import './styles.scss';

const Profile = () => {
  return (
    <div className="profile">
      <PersonalInfo />
      <InfoChanger />
      <PlayerHistory />
    </div>
  )
}

export default Profile;