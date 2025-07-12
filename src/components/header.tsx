import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          {title}
        </Link>

        <nav className="space-x-4 text-sm text-gray-600">
          <Link to="/categories" className="hover:text-black">
            카테고리
          </Link>
          <Link to="/tags" className="hover:text-black">
            태그
          </Link>
          <Link to="/about" className="hover:text-black">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
