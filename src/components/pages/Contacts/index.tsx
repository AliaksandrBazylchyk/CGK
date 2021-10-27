import React from 'react';
import "./styles.scss";

const Contacts = () => {
  return (
    <div className="contact_page">
      <div className="feedback_form">
        <div className="first_and_second_name_fields">
          <input className="input_field" type="text" placeholder="Имя"/>
          <input className="input_field" type="text" placeholder="Фамилия"/>
        </div>
        <label>Почта</label>
        <input className="input_field" type="text" placeholder=""/>
        <label>Текст</label>
        <textarea className="textaria_field"/>
      </div>
      <div className="information_field">
        <div className="feedback_header">
          <p>
            Оставь свой отзыв или задай вопрос
          </p>
        </div>
        <div className="feedback_text">
          <p className="feedback_text_left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <br/>
          <p className="feedback_text_right">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className="feedback_footer">
            <p>
              Спасибо что вы с нами
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contacts;
