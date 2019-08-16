import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('.nav-item');
    links.forEach(el => {
      if (window.location.pathname === el.dataset.id) {
        el.classList.add('current')
      } else {
        el.classList.remove('current')
      }
    })
  })
  
  const handleMenuClick = event => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = event => {
    setIsOpen(false)
  }
console.log('RENDER')
  return (
    <header>
      <div onClick={handleMenuClick} class={`menu-button ${isOpen ? 'close' : ''}`}>
        <div class="button-line"></div>
        <div class="button-line"></div>
        <div class="button-line"></div>
      </div>

      <nav class={`menu ${isOpen ? 'show' : ''}`}>
        <div class={`menu-branding ${isOpen ? 'show' : ''}`}>
          {/* <div class="portrait"></div> */}
        </div>

        <ul class={`menu-nav ${isOpen ? 'show' : ''}`}>
          <li data-id="/" onClick={handleLinkClick}  class={`nav-item current ${isOpen ? 'show' : ''}`}>
            <Link to="/" class="nav-link">Главная</Link>
          </li>
          <li data-id="/about" onClick={handleLinkClick} class={`nav-item ${isOpen ? 'show' : ''}`}>
            <Link to="/about" class="nav-link">Обо мне</Link>
          </li>
          <li data-id="/work" onClick={handleLinkClick} class={`nav-item ${isOpen ? 'show' : ''}`}>
            <Link to="/work" class="nav-link">Мои работы</Link>
          </li>
          <li data-id="/contacts" onClick={handleLinkClick} class={`nav-item ${isOpen ? 'show' : ''}`}>
            <Link to="/contacts" class="nav-link">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }