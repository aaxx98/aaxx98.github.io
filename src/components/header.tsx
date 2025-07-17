import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

const Header = () => {
  const { title } = useSiteMetadata();

  return (
    <header className="h-18 border-blue-100 bg-white border-b-1 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center h-full">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-400 hover:text-black sm:text-3xl"
        >
          {`{${title}}`}
        </Link>

        <nav className="hidden text-sm text-blue-400 mr-10 flex sm:block">
          <Link
            to="/categories"
            className="relative px-6 py-2 hover:text-black hover:font-semibold"
          >
            카테고리
          </Link>
          <Link
            to="/tags"
            className="relative px-6 py-2 hover:text-black hover:font-semibold"
          >
            태그
          </Link>
          <Link
            to="/about"
            className="relative px-6 py-2 hover:text-black hover:font-semibold"
          >
            소개
          </Link>
        </nav>
      </div>

      <nav className="flex justify-center sm:hidden text-sm text-blue-400 space-x-4 sm:fixed bg-white border-b-1 border-blue-100">
        <Link
          to="/categories"
          className="relative px-6 py-2 hover:text-black hover:font-semibold"
        >
          카테고리
        </Link>
        <Link
          to="/tags"
          className="relative px-6 py-2 hover:text-black hover:font-semibold"
        >
          태그
        </Link>
        <Link
          to="/about"
          className="relative px-6 py-2 hover:text-black hover:font-semibold"
        >
          소개
        </Link>
      </nav>
    </header>
  );
};

export default Header;
