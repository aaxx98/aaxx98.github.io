import React, { useState, useEffect } from 'react';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLight(true);
      document.documentElement.classList.add('light');
    }
  }, []);

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  return (
    <button type="button" className="theme-toggle" onClick={() => setIsLight(!isLight)}>
      {isLight ? (
        <FontAwesomeIcon icon={faSun} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      )}
    </button>
  );
}
