import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { useSiteMetadata } from '../hooks/useSiteMetaData';
import ThemeToggle from './button/themeToggle';

function Header() {
  const { title } = useSiteMetadata();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          {`{${title}}`}
        </Link>
        <nav className="nav-right" aria-label="menu">
          <div>
            <ThemeToggle />
          </div>
          <ul className="nav-menu">
            <li>
              <Link to="/categories" className="category" activeClassName="active">
                시리즈
              </Link>
            </li>
            <li>
              <Link to="/tags" className="tag" activeClassName="active">
                태그
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                소개
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
