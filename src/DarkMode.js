import React from 'react';

const DarkMode = () => {
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DarkMode;
