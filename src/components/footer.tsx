import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-blue-100 py-6 text-center text-sm text-gray-500">
      <div className="flex justify-center space-x-3 mb-3">
        <a
          href="https://github.com/aaxx98"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:opacity-60 transition"
        >
          <StaticImage
            src="../images/github_icon.png"
            alt="GitHub"
            width={24}
            height={24}
            placeholder="none"
          />
        </a>
        <div className="flex items-center justify-center sm:justify-start space-x-1 text-sm">
          <p className="text-xs">email:</p>
          <a
            href="mailto:aaxx98@naver.com"
            aria-label="Email"
            className="hover:opacity-60 transition"
          >
            aaxx98@naver.com
          </a>
        </div>
      </div>
      <p className="text-xs text-blue-400">
        © {new Date().getFullYear()} aaxx98's Blog. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
