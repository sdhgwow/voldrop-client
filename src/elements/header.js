import React, { useState } from 'react';

const Header = ({ toggleOverlay }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBottom = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    window.scrollTo({ top: scrollHeight, behavior: 'smooth' });
  };

  return (
    <header className='Defheader'>
      <a className="logo" href="/"></a>
      <a className='HeaderNavBtnWUs' onClick={handleScrollToTop}>Работа с нами</a>
      <a className='HeaderNavBtnCn' href='/contacts'>Контактная информация</a>
      <button className='HeaderNavBtnOtk' onClick={handleScrollToBottom}>Оставить отклик</button>
      <div className={`mobile-menu ${showMobileMenu ? 'active' : ''}`}>
        <ul>
          <li><a className='mobile-menuAtxt' onClick={handleScrollToTop}>Работа с нами</a></li>
          <li><a className='mobile-menuAtxt' href='/contacts'>Контактная информация</a></li>
          <li><button onClick={handleScrollToBottom}>Оставить отклик</button></li>
        </ul>
        <div className='BottomMenu'>
            <div className='BottomMenuMain'>Офис в Санкт-Петербурге</div>
            <div className='BottomMenuDesc'>Здесь должен быть адрес офиса</div>
            <a className='BottomMenuLink' href='/#allVacancies'>Смотреть все вакансии</a>
            <a className='BottomMenuLink' href='mailto:job@voldrop.ru'>job@voldrop.ru</a>
        </div>
      </div>
      <div
        className={`hamburger-menu-btn ${showMobileMenu ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;