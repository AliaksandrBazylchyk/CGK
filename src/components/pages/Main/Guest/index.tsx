import React from 'react';

import bigLogo from "./bigLogo.png";

import "./styles.scss"

const Guest = () => {
  return (
    <div className="guest">
      <img
        className="bigLogo"
        src={bigLogo}
        alt="Very big sova"/>
      <div className="guest_text">
        <div className="guest_info">
          <p className="guest_header">
            Проведи хорошо время
          </p>
          <p className="guest_subheader">
            Играть в команде веселее. Проверь свои знания
            вместе со своими друзьями в интеллектуальной
            игре Что? Где? Когда?
          </p>
        </div>
        <div className="guest_info guest_right_info">
          <p className="guest_header">
            Проверь свою интуицию
          </p>
          <p className="guest_subheader">
            Что может быть лучше, чем проверка своих знаний
            в совершено разных направлениях. узнай, на сколько
            широкий твой кругозор не выходя из дома.
            А заодно сможешь узнать что-то новое
          </p>
        </div>
      </div>
    </div>
  )
}

export default Guest;