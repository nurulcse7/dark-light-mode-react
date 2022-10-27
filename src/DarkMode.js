import React, { useState } from 'react';
import { useEffect } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState('light-theme');

  const toggleTheme = () => {
    if(theme === 'dark-theme') {
        setTheme('light-theme')
    }
    else {
        setTheme('dark-theme')
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <header>
        <a href='https://portfolio-frontend-83a97.web.app/' alt='Logo'>
          My Portfolio
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <div className='container grid grid-two-column'>
            <div className='hero-section-data'>
              <h1>React Dark Mode</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                id ab similique nisi dolore inventore eveniet quos repellat
                possimus, reprehenderit saepe sapiente autem beatae laboriosam
                minus iste dolorem? Magnam, laboriosam.
              </p>
              <button onClick={() => toggleTheme()}>Toggle Mode</button>
            </div>
            <div className='hero-section-image'>
              <img
                src='https://i.ibb.co/Kq8Ln8p/profile-pic.png'
                alt='Nurul Islam'
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DarkMode;
