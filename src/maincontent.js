import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Vacancies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [vacanciesData, setVacanciesData] = useState([]);
  const [filteredVacancies, setFilteredVacancies] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch('http://localhost:3001/vacancies')
      .then(response => response.json())
      .then(data => {
        setVacanciesData(data);
        setFilteredVacancies(data);
      })
      .catch(error => console.error('Ошибка получения вакансий:', error));
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredVacancies(vacanciesData.filter((vacancy) => vacancy.title.toLowerCase().includes(searchTerm)));
    } else {
      setFilteredVacancies(vacanciesData.filter((vacancy) => vacancy.category === selectedCategory && vacancy.title.toLowerCase().includes(searchTerm)));
    }
  }, [searchTerm, selectedCategory]);

  return (
    <div className="vacancies-container">
      <div className="search-bar">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Найти вакансию" />
      </div>
      <div className="category-buttons">
          <button className={selectedCategory === 'all' ? 'category-button active' : 'category-button'} onClick={() => handleCategoryFilter('all')}>Все вакансии</button>
          <button className={selectedCategory === 'dev' ? 'category-button active' : 'category-button'} onClick={() => handleCategoryFilter('dev')}>Разработка</button>
          <button className={selectedCategory === 'design' ? 'category-button active' : 'category-button'} onClick={() => handleCategoryFilter('design')}>Дизайнинг</button>
          <button className={selectedCategory === 'management' ? 'category-button active' : 'category-button'} onClick={() => handleCategoryFilter('management')}>Менеджмент</button>
        </div>
      <div className="vacancies-list">
        {filteredVacancies.length > 0 ? (
          filteredVacancies.map((vacancy) => (
            <div key={vacancy.id} className="vacancy-item">
              <Link to={vacancy.link}>{vacancy.gradation} {vacancy.title}</Link>
              <p>{vacancy.description}</p>
            </div>
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
};

export default Vacancies;