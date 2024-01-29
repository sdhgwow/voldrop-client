import React, { useState } from 'react';
import axios from 'axios';

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    имя: '',
    номерТелефона: '',
    email: '',
    ссылкаНаРезюме: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.имя && formData.номерТелефона && formData.email && formData.ссылкаНаРезюме) {
      axios.post('http://localhost:3001/sendApplicationData', formData)
        .then(response => {
          console.log('Отправка данных:', formData);
          setError('Информация успешно доставлена')
        })
        .catch(error => {
          console.error('Ошибка отправки данных на сервер:', error);
          setError('Возникла ошибка на стороне сервера при отправке данных. Пожалуйста, попробуйте позже.')
        });
    } else {
      setError('Все поля обязательны для заполнения! Перепроверьте корректность введенных Вами данных.');
    }
  };
    
      return (
        <div className="ApplicationForm">
          <h2>Оставить отклик</h2>
          <p>Заполните данные и нажмите кнопку "Оставить отклик". Наш HR-менеджер свяжется с вами в ближайшее время.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" name="имя" placeholder="Имя" value={formData.имя} onChange={handleChange} />
              <input type="tel" name="номерТелефона" placeholder="Номер телефона" value={formData.номерТелефона} onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
              <input type="text" name="ссылкаНаРезюме" placeholder="Ссылка на резюме" value={formData.ссылкаНаРезюме} onChange={handleChange} />
            </div>
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className='acButton'>Оставить отклик</button>
          </form>
        </div>
      );
    };

export const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <p>© 2024 by Voldrop. All Rights Reserved.</p>
    </div>
  );
};
