import React, { useEffect, useState } from 'react';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false;
  const saved = localStorage.getItem('theme');
  if (saved) return saved === 'light';
  return window.matchMedia('(prefers-color-scheme: light)').matches;
};

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', isLight);
    root.style.colorScheme = isLight ? 'light' : 'dark';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }, [isLight]);

  const handleClick = () => {
    const root = document.documentElement;
    root.classList.add('no-theme-transition');
    setIsLight((v) => !v);
    setTimeout(() => root.classList.remove('no-theme-transition'), 70);
  };

  return (
    <button type="button" className="theme-toggle" onClick={handleClick} aria-label="Toggle theme">
      {isLight ? (
        <FontAwesomeIcon icon={faSun} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="lg" />
      )}
    </button>
  );
}
