import React from 'react';
import './styles.scss';

const Contacts = () => {
  return (
    <div className="contact_page">
      <div className="feedback_container">
        <div className="feedback_screen">
          <div className="feedback_screen_body">
            <div className="feedback_body_item left">
              <div className="feedback_title">
                <span>Обратная</span>
                <span>Связь</span>
              </div>
              <div className="feedback_contact">YEP YEP</div>
            </div>
            <div className="feedback_body_item">
              <div className="working-form">
                <div className="feedback_form_group">
                  <input className="feedback_form_control" placeholder="Имя" />
                </div>
                <div className="feedback_form_group">
                  <input
                    className="feedback_form_control"
                    placeholder="Почта"
                  />
                </div>
                <div className="feedback_form_group">
                  <input className="feedback_form_control" placeholder="Тема" />
                </div>
                <div className="feedback_form_group message">
                  <input
                    className="feedback_form_control"
                    placeholder="Сообщение"
                  />
                </div>
                <div className="feedback_form_group buttons">
                  <button className="feedback_form_button">Отправить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information_field">
        <div className="feedback_header">
          <p>Оставь свой отзыв или задай вопрос</p>
        </div>
        <div className="feedback_text">
          <p className="feedback_text_left">
            Данная страница была создана чтобы получать обратную связь от
            пользователей нашего сервиса. Мы готовы выслушать лубую критику и
            пожелания, готовы принять ваши вопросы или просто узнать как прошел
            ваш день :)
          </p>
          <br />
          <p className="feedback_text_right">
            Каждое сообщение отправленное из этой формы <b>важно</b> для каждого
            из администраторов проекта. Наша политика - держать близкий контакт
            с нашими пользователями.
          </p>
          <div className="feedback_footer">
            <p>Спасибо что вы с нами</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
