import React from 'react';

import { ReactComponent as RouletteTable } from 'assets/table.svg';
import { ReactComponent as RouletteArrow } from 'assets/arrow.svg';
import { ReactComponent as RouletteTop } from 'assets/top_table.svg';

import './styles.scss';

const Roulette = () => {
  return (
    <div className="roulette">
      <div className="roulette_top">
        <RouletteTop />
      </div>
      <div className="roulette_center">
        <RouletteArrow />
      </div>
      <div className="roulette_table">
        <RouletteTable />
      </div>
    </div>
  );
};

export default Roulette;
