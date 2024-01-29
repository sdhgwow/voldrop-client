import React, { useState, useEffect } from 'react';
import './style.css'

const MidQA = () => {
  const [vacancyData, setVacancyData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/vacancy/middle-qa')
      .then(response => response.json())
      .then(data => {
        setVacancyData(data);
      })
      .catch(error => console.error('Ошибка получения вакансий:', error));
  }, []);

  return (
    <div className="vacancy-details">
      {vacancyData && Object.keys(vacancyData).length > 0 ? (
        <div>
          <div className="header">
            <h1>{vacancyData.title}</h1>
            <button>Откликнуться</button>
            <p>Опыт работы: 1-3 года</p>
            <p>Занятость: {vacancyData.zanyatost}</p>
          </div>
          <div className="description">
            <hr />
            <p>{vacancyData.description}</p>
          </div>
          <div className="tasks">
            <h2>Задачи, с которыми тебе предстоит работать:</h2>
            {Object.keys(vacancyData)
              .filter(key => key.startsWith('task') && vacancyData[key])
              .map((key, index) => <p key={index}>{vacancyData[key]}</p>)}
          </div>
          <div className="skills">
            <h2>Для решения задач необходимы знания:</h2>
            {Object.keys(vacancyData)
              .filter(key => key.startsWith('skill') && vacancyData[key])
              .map((key, index) => <p key={index}>{vacancyData[key]}</p>)}
          </div>
          <div className="benefits">
            <h2>В свою очередь, от нас ты получишь:</h2>
            <p>Команда, состоящая из отзывчивых профессионалов своего дела, готовых помочь каждому</p>
            <p>Заботу, отзывчивость и уважительное отношение со стороны руководства</p>
            <p>Официальное оформление</p>
            <p>ДМС</p>
            <p>Компенсация питания</p>
            <p>Веселые, шумные и интересные мероприятия</p>
            <p>Компенсация средств за обучение для повышения квалификации</p>
          </div>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default MidQA;