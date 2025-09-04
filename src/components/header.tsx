import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetaData";
import ThemeToggle from "./button/themeToggle";

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          {`{${title}}`}
        </Link>
        <nav aria-label="menu">
          <ul className="nav-menu">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link
                to="/categories"
                className="category"
                activeClassName="active"
              >
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
};

export default Header;
