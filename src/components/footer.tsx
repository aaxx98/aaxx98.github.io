import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} aaxx98's Blog. All rights reserved.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/aaxx98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GITHUB
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:aaxx98@naver.com" className="tooltip">
            EMAIL
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="tooltip-text">aaxx98@naver.com / 장혜진</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
